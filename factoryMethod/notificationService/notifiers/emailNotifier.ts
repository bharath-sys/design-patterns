import { notifier } from "../interfaces/notifier.interface";

export class emailNotifier implements notifier {
    send(message:string){
        console.log("email sevice is sending message : ",message);
    }
}