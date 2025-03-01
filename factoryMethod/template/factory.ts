import { Product1, Product2, Product3 } from "./products";

class factoryCreator {
    static createProduct(type: string) {
        switch (type) {
            case "1":
                return new Product1();
            case "2":
                return new Product2();
            case "3":
                return new Product3();
            default:
                throw new Error("Invalid type");
        }
    }
}

export { factoryCreator as FactoryCreator } 