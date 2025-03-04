import { DarkModeUIFactory, LighModeUIFactory } from "./product.factory";


export class UIFactoryCreator {
    static createUIFactory(name: string){ // static as to not create class instance | to directly call the the class method
        switch(name){
            case "light":
                return new LighModeUIFactory();
            case "dark":
                return new DarkModeUIFactory();
            default : 
                throw new Error("provide valid UIFactory name")
        }
    }
}