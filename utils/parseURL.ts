export const parseURL = (url: string) => {
    return decodeURI(url).replaceAll('_', ' ')
}
