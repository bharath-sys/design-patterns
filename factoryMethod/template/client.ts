import { FactoryCreator } from "./factory";

function main() {
    const type: string = process.argv[2] || "1";
    try {
        const product = FactoryCreator.createProduct(type);
        product.method("param1");
    }
    catch (err) {
        console.log(err);
    }
}

main();