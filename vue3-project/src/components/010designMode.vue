<template>
    <h1>10设计模式</h1>
    <button @click="constructorPattern">构造器模式</button>
    <button @click="prototypePattern">原型模式</button>
    <button @click="classPattern">类模式</button>
    <button @click="singletonPattern">单例模式</button>
    <button @click="observerpPattern">观察者模式</button>
</template>
<script>

export default {
    setup () {
        //构造器模式
        const constructorPattern = () => {

            function constructor (name, age) {
                this.name = name
                this.age = age
                this.say = function () {
                    return this.name + this.age
                }
            }

            let newConstructor = new constructor('xiaoming', 23)
            console.log('构造器模式', newConstructor.name, newConstructor.say(), newConstructor)
        }



        //原型模式
        const prototypePattern = () => {

            function prototypePattern (name, age) {
                this.name = name
                this.age = age
            }

            prototypePattern.prototype.say = function () {
                return this.name + this.age
            }

            let newprototypePattern = new prototypePattern('xiaoming', 23)
            console.log('原型模式', newprototypePattern.name, newprototypePattern.say(), newprototypePattern)
        }



        //类模式
        const classPattern = () => {
            class Employee {
                constructor(name, age) {
                    this.name = name
                    this.age = age

                }
                say () {
                    return this.name + this.age
                }
            }

            let newEmployee = new Employee('小明', 23)
            console.log('构造器模式', newEmployee.name, newEmployee.say(), newEmployee)
        }



        //单例模式
        const singletonPattern = () => {
            console.log('单例模式')
        }



        //观察者模式
        const observerpPattern = () => {
            class Subject {
                constructor() { 
                    this.observers = []
                }
                add (observer) {
                    this.observers.push(observer)
                }
            }

            class Observe {

            }

            const subject = new Subject()
            
        }




        return {
            constructorPattern,
            prototypePattern,
            classPattern,
            singletonPattern,
            observerpPattern
        }
    },
}

</script>
