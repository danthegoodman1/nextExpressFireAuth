const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('thing', '/at/:sll') // ('page file name', 'url to get there/:query')