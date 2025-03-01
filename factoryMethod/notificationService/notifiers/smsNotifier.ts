import { notifier } from "../interfaces/notifier.interface";

export class smsNotifier implements notifier {
    send(message:string){
        console.log("sms sevice is sending message : ",message);
    }
}