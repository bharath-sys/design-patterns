import { Button, CheckBox, UIFactory } from "./interfaces";
import { DarkModeButton, DarkModeCheckbox, LightModeButton, LightModeCheckbox } from "./products";


class LighModeUIFactory implements UIFactory {
    createButton(): Button {
        return new LightModeButton();
    }

    createCheckBox(): CheckBox {
        return new LightModeCheckbox();
    }
}

class DarkModeUIFactory implements UIFactory {
    createButton(): Button {
        return new DarkModeButton();
    }

    createCheckBox(): CheckBox {
        return new DarkModeCheckbox();
    }
}

export {
    DarkModeUIFactory, LighModeUIFactory
}