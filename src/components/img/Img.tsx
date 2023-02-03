import Image, { ImageProps } from 'next/image'

export const Img: React.FC<ImageProps> = ({ alt, ...props }) => {
    return <Image alt={alt} placeholder="empty" {...props} />
}
