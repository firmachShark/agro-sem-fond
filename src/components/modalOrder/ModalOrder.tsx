import { useMemo } from 'react'
import { Modal } from 'src/components/modal/Modal'
import { useAppSelector, useDispatchCreator } from 'src/hooks/useStore'
import { closeModalOrder } from 'src/store/slices/modal-order.slice'
import { Input } from '../input'

export const ModalOrder = () => {
    const { isOpen, title, text, addons } = useAppSelector(
        (state) => state.modalOrder,
    )
    const { dispatchCloseModalOrder } = useDispatchCreator({ closeModalOrder })

    const formAddons = useMemo(() => {
        if (addons)
            return (
                <>
                    {addons.map((addon) => (
                        <Input key={addon.name} {...addon} type="hidden" />
                    ))}
                </>
            )

        return undefined
    }, [addons])

    return (
        <Modal
            withForm
            isOpen={isOpen}
            title={title}
            text={text}
            onClose={dispatchCloseModalOrder}
            formAddons={formAddons}
        />
    )
}
