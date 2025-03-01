import { emailNotifier } from "./notifiers/emailNotifier";
import { smsNotifier } from "./notifiers/smsNotifier";
import { pushMessageNotifier } from "./notifiers/pushMessageNotifier";
import { notifier } from "./interfaces/notifier.interface";

export class notificationFactory {
    static createNotifier(type: string):notifier{
        switch(type){
            case "email":
                return new emailNotifier();
            case "sms":
                return new smsNotifier();
            case "pushMessage":
                return new pushMessageNotifier();
            default: 
                throw new Error("Unknown type")
        }
    }
}