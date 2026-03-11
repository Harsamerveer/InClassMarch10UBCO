const productService = require('../services/productService');   

function getAllProducts(req, res) {
    const products = productService.getAllProducts();
    res.json(products);
}

function getProductById(req, res) {
    const id = parseInt(req.params.id);
    const product = productService.getProductById(id);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);

}

module.exports = {
    getAllProducts,
    getProductById
};
