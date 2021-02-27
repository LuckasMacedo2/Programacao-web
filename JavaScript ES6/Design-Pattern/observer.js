class Observable{
    // Lista de observers
    constructor(){
        this.observers = [];    
    }

    // Permite a adição de subscrible nos observers
    subscribe(f){
        this.observers.push(f);
    }

    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data){
        this.observers.forEach(observer => observer(data))
    }
}

const o = new Observable;
const logData1 = data => console.log(`Subscrible 1: ${data}`);
const logData2 = data => console.log(`Subscrible 2: ${data}`);
const logData3 = data => console.log(`Subscrible 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('Notified 1');

o.unsubscribe(logData2);

o.notify('Notified 2');