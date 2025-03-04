
// abstract methods for products.

interface Button {
    render(): void;
}

interface CheckBox {
    toggle(): void;
}


// created UI factory 
interface UIFactory {
    createButton(): Button;
    createCheckBox(): CheckBox;
}

export {
    Button,CheckBox,UIFactory
}