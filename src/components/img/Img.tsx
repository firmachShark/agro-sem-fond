import Image, { ImageProps } from 'next/image'
import Loading from 'public/images/loading.gif'

type ImgProps = ImageProps & React.ImgHTMLAttributes<HTMLImageElement>

function hasValue(v: unknown) {
    return v !== undefined && v !== null
}

export const Img: React.FC<ImgProps> = ({
    alt,
    width,
    height,
    src,
    ...props
}) => {
    if (!hasValue(width) || !hasValue(height)) {
        const { ...imgProps } = props as any
        // eslint-disable-next-line @next/next/no-img-element
        return <img alt={alt} src={(src as any)?.src ?? src} {...imgProps} />
    }

    return (
        <Image
            alt={alt}
            src={src}
            placeholder="blur"
            blurDataURL={Loading.src}
            {...props}
            width={width}
            height={height}
        />
    )
}
