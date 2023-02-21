import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import React, { ReactNode } from 'react'
import { Modal as BModal, ModalProps as BModalProps } from 'react-bootstrap'

interface ModalProps {
    title: string | JSX.Element
    text: string | JSX.Element
    onClose: () => void
    isOpen: boolean
    withForm?: boolean
    isCenter?: boolean
    size?: BModalProps['size']
    bodyClassName?: string
    headerClassName?: string
    formAddons?: ReactNode
}

export const Modal: React.FC<ModalProps> = ({
    title,
    text,
    isOpen,
    onClose,
    withForm,
    isCenter = false,
    size,
    headerClassName,
    bodyClassName,
    formAddons,
}) => {
    return (
        <BModal size={size} show={isOpen} onHide={onClose} centered={isCenter}>
            <BModal.Header className={headerClassName} closeButton>
                <h5>{title}</h5>
            </BModal.Header>
            <BModal.Body className={bodyClassName}>
                {typeof text === 'string' ? <p>{text}</p> : text}
                {withForm && (
                    <form>
                        {formAddons}
                        <div>
                            <Input
                                autoFocus
                                name="name"
                                placeholder="Ваше Имя"
                            />
                            <div />
                        </div>
                        <div>
                            <Input
                                required
                                name="phone"
                                placeholder="Ваш Номер"
                            />
                            <div />
                        </div>
                        <Button type="submit" variant="primary">
                            Отправить
                        </Button>
                    </form>
                )}
            </BModal.Body>
        </BModal>
    )
}
