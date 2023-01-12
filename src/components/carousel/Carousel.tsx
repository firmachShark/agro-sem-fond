import { Button } from 'src/components/button'
import React, { PropsWithChildren } from 'react'
import Slider, { Settings } from 'react-slick'

interface CarouselProps extends Settings {}

export const Carousel = ({
    children,
    ...props
}: PropsWithChildren<CarouselProps>) => {
    const settings: Settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Button>Next</Button>,
        prevArrow: <Button>Prev</Button>,
        ...props,
    }

    return <Slider {...settings}>{children}</Slider>
}
