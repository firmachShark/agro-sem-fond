import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
    ICalculator,
    ICalculatorPart,
    ICalculatorSection,
} from 'src/models/ICalculator'
import styles from './Calculator.module.scss'
import { CalculatorSection } from './CalculatorSection'
import { getKeysByLevel, getValueByLevel } from './utils'

interface CalculatorProps {
    data: any
    setPrice: (value: number) => void
    defaultPrice: number
    calculator: ICalculator
}

export const Calculator: React.FC<CalculatorProps> = ({
    data,
    setPrice,
    calculator,
    defaultPrice,
}) => {
    const sections = useMemo(() => {
        const sections: Array<
            ICalculatorSection & {
                partId: string
                partType: ICalculatorPart['type']
            }
        > = []
        calculator.schema.forEach((part) =>
            sections.push(
                ...part.sections.map((section) => ({
                    ...section,
                    partId: part.id,
                    partType: part.type,
                })),
            ),
        )
        return sections
    }, [calculator])

    const [checked, setChecked] = useState<Record<string, string>>(() => {
        return sections.reduce((result: any, section) => {
            switch (section.partType) {
                case 'nested': {
                    const keys = getKeysByLevel(
                        data[section.partId],
                        section.level,
                    )
                    result[section.id] = keys[0]
                    break
                }
                case 'switch': {
                    if (!data[section.partId]) break
                    const inputData = data[section.partId][0]
                    result[section.id] = `${section.id}-${inputData.value}`
                    break
                }
                default:
                    break
            }

            return result
        }, {})
    })

    const selectInput = useCallback(
        (sectionId: string) => (value: string) => {
            setChecked((prev) => ({ ...prev, [sectionId]: value }))
        },
        [],
    )

    const calculatePrice = useCallback(() => {
        let price = 0

        const sectionIds = Object.keys(checked)

        calculator.schema.forEach((part) => {
            switch (part.type) {
                case 'nested': {
                    const replace = sectionIds.reduce(
                        (result: Record<number, string>, id) => {
                            const section = sections.find(
                                (section) => section.id === id,
                            )

                            if (!section) return result

                            result[section.level] = checked[id]

                            return result
                        },
                        {},
                    )

                    price += getValueByLevel(data[part.id], replace)

                    return
                }
                case 'switch': {
                    const valueStr = checked[part.id]
                    if (!valueStr) return
                    const value = Number(valueStr.split(`${part.id}-`)[1])
                    price += value
                    return
                }
                default:
                    return
            }
        })

        setPrice(price ? price : defaultPrice)
    }, [checked, calculator, setPrice, data, sections, defaultPrice])

    useEffect(() => {
        calculatePrice()
    }, [calculatePrice])

    return (
        <form data-calculator className={styles.calculator}>
            {sections.map((section) => (
                <CalculatorSection
                    setChecked={selectInput(section.id)}
                    checked={checked[section.id]}
                    section={section}
                    key={section.id}
                    data={data[section.partId]}
                    partType={section.partType}
                />
            ))}
        </form>
    )
}
