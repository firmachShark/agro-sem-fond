import { IViewedItem } from 'src/models/IViewed'

const COOKIE_KEY = 'viewed'

const REGEXP = new RegExp('(^| )' + COOKIE_KEY + '=([^;]+)')

class ViewedApi {
    getFromCookie(cookies?: string) {
        const cookie = cookies || document.cookie
        const result = cookie.match(REGEXP)

        if (!result) return null

        return this.parseJSON(result[2])
    }

    parseJSON(json: string) {
        try {
            const parsed = JSON.parse(json)
            if (!Array.isArray(parsed)) return null

            return parsed as IViewedItem[]
        } catch (e) {
            return null
        }
    }

    setInCookie(items: IViewedItem[]) {
        let value = ''
        try {
            value = JSON.stringify(items)
        } catch (e) {
            return false
        }

        if (!value) return false

        const date = new Date()
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000)
        const expires = 'expires=' + date.toUTCString()
        document.cookie = COOKIE_KEY + '=' + value + '; ' + expires + '; path=/'

        return true
    }

    add(item: IViewedItem) {
        const prev = this.getFromCookie()
        if (prev) {
            const exists = prev.find((product) => product.id === item.id)

            if (exists) return

            prev.unshift(item)
        }

        this.setInCookie(prev || [{ id: item.id }])
    }

    getAll(): IViewedItem[] {
        return this.getFromCookie() || []
    }

    clear() {
        this.setInCookie([])
    }
}

export default new ViewedApi()
