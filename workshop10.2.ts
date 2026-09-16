export{}
class CPU{
    constructor(private brand: string,private cors: number){}
    process(){
        console.log(`CPU: ${this.brand} ${this.cors} cors กำลังประมวลผล...`);
    }
    showinfo(){
        console.log(`CPU info Brand: ${this.brand} Cores: ${this.cors} `);
    }
}
class RAM{
    constructor(private capacity: number){}
    lode(){
        console.log(`RAM ${this.capacity} GB กำลังโหลดข้อมูล...`);
    }
    showinfo(){
        console.log(`RAm info capacity: ${this.capacity} GB`);
    }
}
class Storage{
    constructor(private capacity: number, private type: string){}
    readData(){
        console.log(`storage กำลังอ่านข้อมูล...`)
    }
    showinfo(){
        console.log(`storage info capacity: ${this.capacity} GB , type: ${this.type}`);
    }
}
class Computer{
    private Cpu: CPU;
    private ram: RAM;
    private storage: Storage;
    constructor(
        Cpu: string,
        cors: number,
        rcapacity: number,
        scapacity: number,
        type: string
    ){
        this.Cpu = new CPU(Cpu,cors);
        this.ram = new RAM(rcapacity);
        this.storage = new Storage(scapacity,type);
    }
    boot(){
        this.Cpu.process();
        this.ram.lode();
        this.storage.readData();
        console.log(`computer บูทเรียบร้อยแล้ว หร้อมทำงาน`)
    }
    showcomputerinfo(){
        console.log(`computer info`)
        this.Cpu.showinfo();
        this.ram.showinfo();
        this.storage.showinfo();
    }
}