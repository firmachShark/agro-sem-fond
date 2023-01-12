export const concatClass = (styles: (string | undefined)[]) =>
    styles.filter((style) => !!style).join(' ')
