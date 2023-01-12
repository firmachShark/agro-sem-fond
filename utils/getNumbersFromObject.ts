export const getNumbersFromObject = (obj: any) => {
    if (typeof obj === 'number') return [obj]

    const result: number[] = []

    Object.values(obj).forEach((value) => {
        result.push(...getNumbersFromObject(value))
    })

    return result
}

export function getObjectByNumber(
    obj: any,
    value: number,
): null | [any, string] {
    if (typeof obj !== 'object') return null

    let result: null | [any, string] = null

    for (const key of Object.keys(obj)) {
        const _value = obj[key]
        if (typeof _value === 'object') {
            result = getObjectByNumber(_value, value)

            if (result !== null) return result
        }

        if (value === _value) {
            result = [obj, key]
            break
        }
    }

    return result
}
