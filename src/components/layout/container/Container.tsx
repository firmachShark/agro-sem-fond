import React, { PropsWithChildren } from 'react'

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = ({
    children,
    ...props
}: PropsWithChildren) => {
    return (
        <div className="container" {...props}>
            {children}
        </div>
    )
}
