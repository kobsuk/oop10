export{}
class Doctor{
    constructor(private doctorid: string, private name: string, private specialty: string){}
    showinfo(){
        console.log(`หมอ ชื่อ: ${this.name} ความเชี่ยวชาญ: ${this.specialty} รหัส: ${this.doctorid}`)
    }
    examine(patient: Patient){
        console.log(`${this.showinfo} ตรวจผู้ป่วย ${patient.showinfo}`)
    }
    diagnose(pt: Patient, dis: string): void{
        console.log(`หมอ: ${this.name} วินิจชัย ${pt.showinfo} ว่าเป็น ${dis}`)
    }
    prescribemedicine(pt: Patient, med: string):void{
        console.log(`หมอ: ${this.name} ได้จ่ายยา: ${med} ให้ ${pt.showinfo}`)
    }
    calculatetreatmentcost(pt: Patient, fee: number, medfee: number):void{
        console.log(`
            หมอ: ${this.name}
            ความเชี่ยวชาญ: ${this.specialty}
            ผู้ป่วย: ${pt.showinfo}
            -------------------------------
            ค่ารักษา: ${fee} บาท
            ค่ายา: ${medfee} บาท
            -------------------------------
            รวม: ${fee + medfee} บาท
            `)
    }
}
class Patient{
    constructor(private patientid: string, private name: string, private age: number){}
    showinfo(): string{
        return `ผู้ป่วย ชื่อ: ${this.name} อายุ: ${this.age} รหัส: ${this.patientid}`
    }
}

const p1 = new Patient(`p001`,`เก่ง`,25);
const p2 = new Patient(`p002`,`ก้ิง`,30);
const d1 = new Doctor(`d001`,`แก้ว`,`หัวใจ`);
const d2 = new Doctor(`d002`,`กิง`,`ปอด`);
d1.examine(p1);
d1.examine(p2);
d2.examine(p1);
d2.examine(p2);
d1.diagnose(p1,`ฟกช้ำ`)
d1.prescribemedicine(p1,`ยาแก้ปวด`)
d1.calculatetreatmentcost(p1,20000,5000000)