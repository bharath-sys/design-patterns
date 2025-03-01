interface product {
    method(param: string): void
}

class product1 implements product {
    method(param: string) {
        console.log(`executing method of product1 with parameters ${param}`);
    }
}

class product2 implements product {
    method(param: string) {
        console.log(`executing method of product2 with parameters ${param}`);
    }
}

class product3 implements product {
    method(param: string): void {
        console.log(`Executing method of product3 with parameters ${param}`);
    }
}

export {
    product1 as Product1,
    product2 as Product2,
    product3 as Product3
}