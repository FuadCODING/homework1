class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Person {
    constructor(company, address) {
        this.company = company;
        this.address = address;
    }
}

class Admin extends Person {
    constructor(company, address) {
        super(company, address);
        this.products = [];
    }

    addProduct(product) {
        if (product instanceof Product) {
            this.products.push(product);
            console.log("Product added.");
        } else {
            console.log("Only instances of Product can be added.");
        }
    }

    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
            console.log("Product removed.");
        } else {
            console.log("Product not found.");
        }
    }

    viewProducts() {
        if (this.products.length === 0) {
            console.log("No products to display.");
        } else {
            console.log("Products:");
            this.products.forEach((product, index) => {
                console.log(`${index + 1}: ${product.name} - $${product.price}`);
            });
        }
    }

    sortProductsByPriceDescending() {
        this.products.sort((a, b) => b.price - a.price);
        console.log("Products sorted by price (descending).");
    }

    sortProductsByPriceAscending() {
        this.products.sort((a, b) => a.price - b.price);
        console.log("Products sorted by price (ascending).");
    }

    findProductsByName(searchTerm) {
        const results = this.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (results.length === 0) {
            console.log("No products found.");
        } else {
            console.log("Search results:");
            results.forEach((product, index) => {
                console.log(`${index + 1}: ${product.name} - $${product.price}`);
            });
        }
    }
}

class User extends Person {
    constructor(company, address, name) {
        super(company, address);
        this.name = name;
    }

    viewProducts(admin) {
        if (admin instanceof Admin) {
            admin.viewProducts();
        } else {
            console.log("You do not have permission to view products.");
        }
    }
}


const admin = new Admin("TechCorp", "123 Tech Lane");
const user1 = new User("TechCorp", "456 User St", "Alice");
const user2 = new User("TechCorp", "789 User Ave", "Bob");


const product1 = new Product("Laptop", 999);
const product2 = new Product("Phone", 499);
const product3 = new Product("Tablet", 299);

admin.addProduct(product1);
admin.addProduct(product2);
admin.addProduct(product3);


admin.viewProducts(); 


admin.sortProductsByPriceDescending(); 
admin.viewProducts(); 

admin.sortProductsByPriceAscending(); 
admin.viewProducts(); 


admin.findProductsByName("Phone"); 


user1.viewProducts(admin); 
