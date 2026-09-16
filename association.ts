export{}
class Student{
    constructor(private name: string,private major: string){}
    getstudeninfo():string{
        return `นักศึกษาชื่อ : ${this.name} สาขา: ${this.major}`
    }
}
class Teacher{
    constructor(private name: string, private faculty: string){}
    teach(student: Student){
        console.log(`อาจารย์: ${this.name} คณะ: ${this.faculty} สอน: ${student.getstudeninfo()}`);
    }
}

const s1= new Student(`สมชาย`,`วิท`);
const s2= new Student(`สมหมาย`,`คณิต`);
const t1= new Teacher(`สมปอง`,`เคมี`);
const t2= new Teacher(`สมศรี`,`คอม`);
t1.teach(s1);
t1.teach(s2);
t2.teach(s1);
t2.teach(s2);