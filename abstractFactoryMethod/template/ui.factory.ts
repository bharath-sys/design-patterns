import { DarkModeUIFactory, LighModeUIFactory } from "./product.factory";


export function CreateUIFactory(name: string){
    switch(name){
        case "light":
            return new LighModeUIFactory();
        case "dark":
            return new DarkModeUIFactory();
        default : 
            throw new Error("provide valid UIFactory name")
    }
}