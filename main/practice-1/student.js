const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return `${Person.basicIntroduce('Tom',21)} I am a Student. I am at Class ${this.klass}.`;
    }
}