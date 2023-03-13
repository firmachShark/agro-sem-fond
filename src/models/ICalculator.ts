export interface ICalculatorSection {
    id: string
    title: string
    valuePath: string
    level: number
    value: number
    prefix?: string
}

export interface ICalculatorEditScheme {}

export interface ICalculatorPart {
    type: 'nested' | 'switch'
    loadType: 'id' | 'value'
    id: string
    sections: ICalculatorSection[]
}

export interface ICalculator {
    name: string
    id: number
    schema: ICalculatorPart[]
}
