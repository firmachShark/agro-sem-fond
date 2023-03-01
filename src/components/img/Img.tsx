import Image, { ImageProps } from 'next/image'
import Loading from 'public/images/loading.gif'

export const Img: React.FC<ImageProps> = ({ alt, ...props }) => {
    return (
        <Image
            alt={alt}
            placeholder="blur"
            blurDataURL={Loading.src}
            {...props}
        />
    )
}
