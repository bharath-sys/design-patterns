import { CreateUIFactory } from "./ui.factory";


function main() {
    try {
        const type = process.argv[2] || "light";
        const UIFactory = CreateUIFactory(type);
        const button = UIFactory.createButton();
        const checkBox = UIFactory.createCheckBox();
        // executing checkbox and button 

        button.render();
        checkBox.toggle();
    }
    catch (err) {
        console.log(err.message);
    }
}

main();