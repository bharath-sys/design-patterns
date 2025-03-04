import { notificationFactory } from "./notificationFactory";


function main(){
    const type = process.argv[2] || "email";
    const notifier = notificationFactory.createNotifier(type);
    notifier.send("message by main")
}

main();