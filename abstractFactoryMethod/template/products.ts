import { Button, CheckBox } from "./interfaces";


class LightModeButton implements Button {
    render() {
        console.log("rendering button in light mode");
    }
}

class DarkModeButton implements Button {
    render() {
        console.log("rendering button in dark mode");
    }
}

class LightModeCheckbox implements CheckBox {
    toggle(): void {
        console.log("toggle button in light mode");
    }
}

class DarkModeCheckbox implements CheckBox {
    toggle(): void {
        console.log("toggle button in dark mode");
    }
}

export {
    LightModeButton, DarkModeButton, DarkModeCheckbox, LightModeCheckbox
}