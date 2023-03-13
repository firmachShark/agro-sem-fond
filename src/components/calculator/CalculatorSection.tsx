import React, { useMemo } from 'react'
import { ICalculatorPart, ICalculatorSection } from 'src/models/ICalculator'
import styles from './Calculator.module.scss'
import { getKeysByLevel } from './utils'

interface CalculatorSectionProps {
    section: ICalculatorSection
    data: any
    setChecked: (value: string) => void
    checked: string
    partType: ICalculatorPart['type']
}

export const CalculatorSection = (props: CalculatorSectionProps) => {
    const { section, data, setChecked, checked, partType } = props

    const inputs: Array<{ title: string; value: string }> = useMemo(() => {
        if (!data) return []

        switch (partType) {
            case 'nested': {
                const keys = getKeysByLevel(data, section.level)
                return keys.map((key) => ({
                    value: key,
                    title: `${key}${section.prefix || ''}`,
                }))
            }
            case 'switch': {
                return data.map((inputData: any) => ({
                    value: `${section.id}-${inputData.value}`,
                    title: inputData.title,
                }))
            }
            default:
                return []
        }
    }, [section, data, partType])

    const handleOnChange =
        (inputId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) setChecked(inputId)
        }

    if (!inputs.length) return null

    return (
        <div className={styles.section}>
            <h4>{section.title}:</h4>
            <div className={styles.inputs}>
                {inputs.map((input, i) => {
                    const name = `calculator-input-${section.id}`
                    const id = `calculator-input-${section.id}-${i}`

                    return (
                        <div className={styles.input} key={id}>
                            <input
                                checked={checked === input.value}
                                type="radio"
                                name={name}
                                id={id}
                                value={input.value}
                                onChange={handleOnChange(input.value)}
                            />
                            <label htmlFor={id}>{input.title}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
