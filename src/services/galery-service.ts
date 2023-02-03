import { getModel } from 'src/http'
import { IGaleryPhoto } from 'src/models/IGaleryPhoto'

class GaleryService {
    async getPhotos() {
        const item = await getModel<IGaleryPhoto>('galery?populate=*')

        return item.images
    }
}

export default new GaleryService()
