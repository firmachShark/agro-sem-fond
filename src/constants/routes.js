const ROUTES = {
    blog: '/блог',
    about: '/о-нас',
    cart: '/корзина',
    delivery: '/доставка',
    faq: '/помощь',
    galery: '/галерея',
    garanty: '/гарантия',
    payment: '/оплата',
    search: '/поиск',
    stock: '/акции',
    viewed: '/просмотрено',
    catalog: '/каталог',
    'catalog/:categoryName': '/каталог/:categoryName',
    'catalog/:categoryName/:productName': '/каталог/:categoryName/:productName',
    thank: '/спасибо',
}

// const ROUTES_ENG = Object.keys(ROUTES).reduce((result, route) => {
//     result[route] = '/' + [route]
//     return result
// }, {})

module.exports = ROUTES
