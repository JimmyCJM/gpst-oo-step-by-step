const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,classes,id){
        super(name,age,id);
        this.clazzes = classes;
    }
    introduce(){
        if (this.clazzes.length === 0) {
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        }
        else {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.clazzes[0].number},${this.clazzes[1].number}.`;
        }
    }
    introduceWith(student){
        if (student.clazz.number === this.clazzes) return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        else return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
    }
    isTeaching(student){
        if(student.introduce() === `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am at Class ${student.clazz.number}.`){
            return this.clazzes.some(value =>value.hasStudent(student));
        }
        else return false;
    }
    static notifyStudentAppended(student){};
    static notifyLeaderAssigned(student){};
}