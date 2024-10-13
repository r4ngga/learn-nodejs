const http = require('http') 
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./controllers/productController')
// const products = require('./data/products.json')

const server = http.createServer((req, res) => { 
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.write('Success Connected')

    if(req.url === '/api/products' && req.method === 'GET'){
        getProducts(req, res)
    }else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'GET'){
        const id = req.url.split('/')[3] 
        getProduct(req, res, id)
    }else if(req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res)
    }else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT'){
        const id = req.url.split('/')[3] 
        updateProduct(req, res, id)
    }else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE'){
        const id = req.url.split('/')[3] 
        deleteProduct(req, res, id)
    }else{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('Success Connected')
        res.end()
    }

    
    // res.end()


})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));