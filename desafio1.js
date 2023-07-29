class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)

        if (prod) {
            console.log("Este producto existe")
        } else {
            this.products.push(product)
        }

    }
    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)
        if (prod) {
            console.log(prod)
        } else {
            console.log("Not found")
        }

    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.aumentarId()
    }

    static aumentarId() {
        if (this.IdAumentar) {
            this.IdAumentar++
        } else {
            this.IdAumentar = 1
        }
        return this.IdAumentar
    }
}

const producto1 = new Product("Celular", "Samsung", 50000, [], "CC111SG", 20)
const producto2 = new Product("Notebook", "Apple", 250000, [], "NN111AP", 30)
const producto3 = new Product("TV", "LG", 80000, [], "TV111LG", 40)

const productManager = new ProductManager()

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)

productManager.getProducts()

productManager.getProductById(1)
