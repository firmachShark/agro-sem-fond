import { Modal } from 'src/components/modal/Modal'
import { useAppSelector, useDispatchCreator } from 'src/hooks/useStore'
import { closeModalOrder } from 'src/store/slices/modal-order.slice'

export const ModalOrder = () => {
    const { isOpen, title, text } = useAppSelector((state) => state.modalOrder)
    const { dispatchCloseModalOrder } = useDispatchCreator({ closeModalOrder })

    return (
        <Modal
            withForm
            isOpen={isOpen}
            title={title}
            text={text}
            onClose={dispatchCloseModalOrder}
        />
    )
}
