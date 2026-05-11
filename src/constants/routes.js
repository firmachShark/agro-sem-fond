const ROUTES = {
    blog: '/blog',
    'blog/:postTitle': '/blog/:postTitle',
    about: '/about',
    cart: '/cart',
    delivery: '/delivery',
    faq: '/faq',
    galery: '/gallery',
    garanty: '/warranty',
    payment: '/payment',
    search: '/search',
    stock: '/stock',
    viewed: '/viewed',
    catalog: '/catalog',
    'catalog/:categoryName': '/catalog/:categoryName',
    'catalog/:categoryName/:productName': '/catalog/:categoryName/:productName',
    thank: '/thank-you',
    privacy: '/privacy',
    'return-terms': '/return-terms',
}

// const ROUTES_ENG = Object.keys(ROUTES).reduce((result, route) => {
//     result[route] = '/' + [route]
//     return result
// }, {})

module.exports = ROUTES
