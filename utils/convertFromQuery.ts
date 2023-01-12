export const convertFromQuery = <T>(
    query: string | undefined,
    defaultValue: T,
) => {
    if (query === undefined) return [defaultValue, true] as const
    try {
        const parsed = JSON.parse(query)
        return [parsed as T, false] as const
    } catch (e) {
        return [defaultValue, true] as const
    }
}
