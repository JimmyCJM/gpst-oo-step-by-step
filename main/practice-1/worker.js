const Person = require('./person');

module.exports = class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `${Person.basicIntroduce('Tom',21)} I am a Worker. I have a job.`;
    }
}