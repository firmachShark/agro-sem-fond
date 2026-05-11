export const createSlug = (text: string) =>
    text
        ? encodeURI(text)
              .toString()
              .toLowerCase()
              .replaceAll(' ', '_')
              .replaceAll('/', '||')
        : text

export const parseSlug = (text: string) =>
    decodeURI(text).replaceAll('_', ' ').replaceAll('||', '/')
