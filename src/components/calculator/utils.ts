export function getKeysByLevel(obj: any, level: number, current = 1): string[] {
    if (!obj) return []

    const keys = Object.keys(obj)

    if (current === level) return keys

    const firstKey = keys[0]

    return getKeysByLevel(obj[firstKey], level, current + 1)
}

export function getValueByLevel(
    obj: any,
    replace: Record<number, string>,
    current = 1,
): number {
    const currentKey = replace[current]
    if (!obj) return 0

    const value = obj[currentKey]
    if (typeof value !== 'object') return value

    return getValueByLevel(value, replace, current + 1)
}
