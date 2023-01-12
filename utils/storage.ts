type Callback = <T>(value: T | null) => void

class StorageWrapper {
    private storage?: Storage
    private subscribers: Record<
        string,
        Array<{ id: number; callback: Callback }>
    > = {}

    constructor(type: 'local' | 'session') {
        try {
            this.storage =
                type === 'local' ? window.localStorage : window.sessionStorage
        } catch (error) {
            return
        }
    }

    get length() {
        if (!this.storage) return

        return this.storage.length
    }

    subscribe(key: string, cb: Callback) {
        const id = Math.round(Date.now() / Math.random())
        const subscription = {
            id,
            callback: cb,
        }
        if (Array.isArray(this.subscribers[key]))
            this.subscribers[key].push(subscription)
        else this.subscribers[key] = [subscription]

        return () => {
            this.subscribers[key] = this.subscribers[key].filter(
                (_subscription) => _subscription.id !== subscription.id,
            )
        }
    }

    pushSubscribers<T>(key: string) {
        if (this.subscribers[key]) {
            this.subscribers[key].forEach((subscribtion) =>
                subscribtion.callback<T>(this.get<T>(key)),
            )
        }
    }

    get<T>(key: string) {
        if (!this.storage) return null

        try {
            const value = this.storage.getItem(key)

            if (value === null) {
                return null
            }

            return JSON.parse(value) as T
        } catch (error) {
            console.error(error)
            return null
        }
    }

    set(key: string, value: unknown) {
        if (!this.storage) return

        try {
            const stringValue = JSON.stringify(value)

            this.storage.setItem(key, stringValue)
            this.pushSubscribers(key)
        } catch (error) {
            console.error(error)
        }
    }

    remove(key: string) {
        if (!this.storage) return

        this.storage.removeItem(key)
        this.pushSubscribers(key)
    }

    clear() {
        if (!this.storage) return

        this.storage.clear()
    }
}

export const localStorageWrapper = new StorageWrapper('local')
export const sessionStorageWrapper = new StorageWrapper('session')
