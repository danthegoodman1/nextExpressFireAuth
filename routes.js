const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
// routes.add('thing', '/at/:sll', 'thing') // ('page file name', 'url to get there/:query')
// this is just another way of doing the above
routes.add({
    page: 'thing', // file in pages directory
    pattern: ['/at/:sll', '/at/:sll/:rere'] // what is typed into url (can be list)
})