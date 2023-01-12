import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import React from 'react'
import { Modal as BModal } from 'react-bootstrap'

interface ModalProps {
    title: string
    text: string
    onClose: () => void
    isOpen: boolean
    withForm?: boolean
    isCenter?: boolean
}

export const Modal: React.FC<ModalProps> = ({
    title,
    text,
    isOpen,
    onClose,
    withForm,
    isCenter = false,
}) => {
    return (
        <BModal show={isOpen} onHide={onClose} centered={isCenter}>
            <BModal.Header closeButton>
                <h5>{title}</h5>
            </BModal.Header>
            <BModal.Body>
                <p>{text}</p>
                {withForm && (
                    <form>
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
