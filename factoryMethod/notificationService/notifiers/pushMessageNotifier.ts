import { notifier } from "../interfaces/notifier.interface";

export class pushMessageNotifier implements notifier {
    send(message:string){
        console.log("push message sevice is sending message : ",message);
    }
}