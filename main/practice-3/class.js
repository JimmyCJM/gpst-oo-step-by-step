// Write your code here
var Teacher = require('./teacher');

module.exports = class Class {
    constructor(number){
        this.number = number;
    }
    appendMember(student){
        student.clazz.number = this.number;
        student.introduce = function () {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz.number}.`;
        }
        Teacher.notifyStudentAppended(`${student.name} has joined Class ${this.number}`);
        //console.log(`I am ${teacher.name}. I know ${student.name} has joined Class ${student.clazz.number}`);
    }
    assignLeader(student){
        if (student.introduce() === `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am at Class ${student.clazz.number}.`){
            if (student.clazz.number !== this.number){
                return `It is not one of us.`;
            }
            else {
                this.leader = student.name;
                student.introduce = function () {
                    return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${student.clazz.number}.`;
                }
                Teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`);
                return `Assign team leader successfully.`;
                //console.log(`I am ${teacher.name}. I know ${student.name} become Leader of Class ${student.clazz.number}`);
            }
        }
        else return `It is not one of us.`;
    }
    hasStudent(stdent){
        if (stdent.clazz.number === this.number)    return true ;
        else return false;
    }
}