export{}
class Engine {
    start(): void{
        console.log(`เครื่องยนต์: ${this.type} ทำงาน`);
    }
    stop(){
        console.log(`เครื่อยนต์: ${this.type} หยุดทำงาน`);
    }
    get type{
        return this._type;
    }
}
class Battery{
    constructor(private capacity: number){}
    charge(){
        this.showstatus();
        this.capacity = 100;
        console.log(`ชาร์จแบตเตอร์รี่เต็มแล้ว แบตเตอร์รี่: ${this.capacity} %`);
    }
    showstatus(){
        console.log(`แบตเตอร์รี่: ${this.capacity} %`);
    }
}
class car {
    private ening: Engine;
    private battery: Battery;
    constructor(){
        this.ening = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startcar(){
        this.ening.start;
    }
    stopcar(){
        this.ening.stop;
    }
    showcarinfo(){
        console.log(`เครื่องยนต์ชนิด: ${this.ening.type}`)
        this.battery.showstatus();
    }
    drive(){
        this.ening.start();
    }
    chargebattery(){
        this.battery.charge();
    }
}

const car1 = new car();
car1.startcar();
car1.showcarinfo();
car1.chargebattery();
car1.drive();
car1.stopcar();