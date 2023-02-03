import React, { useEffect, useMemo, useState } from 'react'
import styles from './Calculator.module.scss'

interface CalculatorProps {
    data: Record<string, Record<string, number>>
    setPrice: (value: number) => void
}

export const Calculator: React.FC<CalculatorProps> = ({ data, setPrice }) => {
    const lengthInputs = useMemo(() => {
        return Object.keys(data).map((key) => ({
            title: key + ' м.',
            value: key,
        }))
    }, [data])

    const stepInputs = useMemo(() => {
        return Object.keys(data[Object.keys(data)[0]]).map((key) => ({
            title: key + ' м.',
            value: key,
        }))
    }, [data])

    const [length, setLength] = useState(() => lengthInputs[0].value)
    const [step, setStep] = useState(() => stepInputs[0].value)

    const onChange = (type: 'length' | 'step', value: string) => () => {
        switch (type) {
            case 'length': {
                setLength(value)
                break
            }
            case 'step': {
                setStep(value)
                break
            }
            default:
                return
        }
    }

    useEffect(() => {
        setPrice(data[length][step])
    }, [step, length, setPrice, data])

    return (
        <form data-calculator className={styles.calculator}>
            <div className={styles.section}>
                <h4>Длина:</h4>
                <div className={styles.inputs}>
                    {lengthInputs.map((input, i) => {
                        const name = 'calculator-input-length'
                        const id = `calculator-input-length-${i}`

                        return (
                            <div className={styles.input} key={id}>
                                <input
                                    checked={length === input.value}
                                    type="radio"
                                    name={name}
                                    id={id}
                                    value={input.value}
                                    onChange={onChange('length', input.value)}
                                />
                                <label htmlFor={id}>{input.title}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.section}>
                <h4>Шаг:</h4>
                <div className={styles.inputs}>
                    {stepInputs.map((input, i) => {
                        const name = 'calculator-input-step'
                        const id = `calculator-input-step-${i}`

                        return (
                            <div className={styles.input} key={id}>
                                <input
                                    checked={step === input.value}
                                    type="radio"
                                    name={name}
                                    id={id}
                                    value={input.value}
                                    onChange={onChange('step', input.value)}
                                />
                                <label htmlFor={id}>{input.title}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </form>
    )
}

export default Calculator
