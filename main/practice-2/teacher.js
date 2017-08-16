const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,klass,id){
        super(name,age,id)
        this.clazzes = klass
    }
    introduce(){
        return (this.clazzes.length !== 0)?(`${super.introduce()} I am a Teacher. I teach Class ${this.clazzes[0].number},${this.clazzes[1].number}.`):(`${super.introduce()} I am a Teacher. I teach No Class.`);
    }
}