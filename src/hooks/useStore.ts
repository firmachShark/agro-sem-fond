import { useMemo } from 'react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { ActionCreator, AnyAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'src/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type ActionMethod = ActionCreator<AnyAction>

type Tail<T extends readonly unknown[]> = T extends readonly [...infer U]
    ? U
    : never

type UseActionCreator<ActionMethod extends ActionCreator<any>> = (
    ...args: Tail<Parameters<ActionMethod>>
) => ReturnType<ActionMethod>

type UseActionCreators<
    Actions extends Record<string, ActionCreator<AnyAction>>,
> = {
    [Key in keyof Actions as `dispatch${Capitalize<
        string & Key
    >}`]: UseActionCreator<Actions[Key]>
}

export function useDispatchCreator<
    ActionsMethods extends Record<string, ActionMethod>,
>(actions: ActionsMethods): UseActionCreators<ActionsMethods> {
    const dispatch = useAppDispatch()

    const dispatchedActions = useMemo(() => {
        return Object.entries(actions).reduce(
            (result: Record<string, ActionCreator<any>>, [key, action]) => {
                result[
                    'dispatch' + key.slice(0, 1).toUpperCase() + key.slice(1)
                ] = (...args: Parameters<typeof action>) =>
                    dispatch(action(...args))

                return result
            },
            {},
        ) as UseActionCreators<ActionsMethods>
    }, [actions, dispatch])

    return dispatchedActions
}
