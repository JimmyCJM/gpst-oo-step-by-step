const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,klass={},id){
        super(name,age,id);
        this.clazz = klass;
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.clazz.number}.`;
    }
}