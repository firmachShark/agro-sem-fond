const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    }).listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on ${PORT}`)
    })
})
