import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import styles from './CountInput.module.scss'

interface CountInputProps {
    value: number
    setValue: Dispatch<SetStateAction<number>>
}

export const CountInput: React.FC<CountInputProps> = ({ value, setValue }) => {
    const [inputValue, setInputValue] = useState<string>(value.toString())

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _value = e.target.value
        const _valueNumber = Number(_value)
        if (Number.isNaN(_valueNumber)) return setInputValue(value.toString())

        if (_valueNumber < 1) {
            setInputValue('1')
            return setValue(1)
        }
        if (_valueNumber > 20) {
            setInputValue('20')
            return setValue(20)
        }

        setValue(_valueNumber)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleIncrement = () => {
        if (value < 20) setValue((prev) => prev + 1)
    }

    const handleDecrement = () => {
        if (value > 1) setValue((prev) => prev - 1)
    }

    useEffect(() => {
        setInputValue(value.toString())
    }, [value])

    return (
        <div className={styles.wrapper}>
            <Button sizeMode="sm" variant="orange" onClick={handleDecrement}>
                <i className="fa fa-minus" aria-hidden="true"></i>
            </Button>
            <Input
                onBlur={handleBlur}
                value={inputValue}
                onChange={handleChange}
                type="text"
            />
            <Button sizeMode="sm" variant="orange" onClick={handleIncrement}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </Button>
        </div>
    )
}
