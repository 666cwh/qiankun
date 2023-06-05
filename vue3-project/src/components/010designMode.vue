<template>
    <h1>10设计模式</h1>
    <button @click="constructorPattern">构造器模式</button>
    <button @click="prototypePattern">原型模式</button>
    <button @click="classPattern">类模式</button>
    <button @click="singletonPattern">单例模式</button>
    <button @click="observerpPattern">观察者模式</button>
    <button @click="publishSubscribe">发布订阅模式</button>
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
            //观察者主体
            class Subject {
                constructor() {
                    //观察者列表
                    this.observers = []
                }
                //添加观察者
                add (observer) {
                    this.observers.push(observer)
                }
                //通知观察者
                notify () {
                    this.observers.forEach(item => {
                        console.log(item)
                        item.updata()
                    })
                }
                //移除观察者
                remove (observer) {
                    this.observers = this.observers.filter(item => item !== observer)
                }
            }

            //观察者个体
            class Observe {
                constructor(name) {
                    this.name = name
                }
                updata () {
                    console.log('updata', this.name)
                }
            }

            const subject = new Subject()
            const observer1 = new Observe('zhangsan')
            const observer2 = new Observe('lisi')
            subject.add(observer1)
            subject.add(observer2)
            console.log(subject.notify())
        }


        //发布订阅模式
        const publishSubscribe = () => {

            // const PubSub = {
            //     list: [],
            //     // 发布
            //     publish () {
            //         this.list.forEach(item => item())
            //     },
            //     //订阅
            //     subscribe (cb) {
            //         this.list.push(cb)
            //     }
            // }


            // function testA () {
            //     console.log('testA')
            // }
            // function testB () {
            //     console.log('testB')
            // }


            // PubSub.subscribe(testA)
            // PubSub.subscribe(testB)

            // PubSub.publish()



            const PubSub = {
                message: {},
                // 发布
                publish (type, data) {
                    // this.list.forEach(item => item())
                    if (!this.message[type]) return
                    this.message[type].forEach(item => item(data))
                },
                //订阅
                subscribe (type, cb) {
                    if (!this.message[type]) {
                        this.message[type] = [cb]
                    } else {
                        this.message[type].push(cb)
                    }
                },

                //取消订阅
                unSubscribe (type, cd) {
                    if (!this.message[type]) return
                    if (!cd) {
                        // 取消全部订阅
                        this.message[type] && (this.message[type].length = 0)
                    } else {
                        this.message[type] = this.message[type].filter(item => item !== cd)
                    }
                }
            }


            function testA (data) {
                console.log('testA', data)
            }
            function testB (data) {
                console.log('testB', data)
            }


            PubSub.subscribe('a', testA)
            PubSub.subscribe('b', testB)

            console.log(PubSub.message)
            PubSub.publish('a', 'zhangsa')
            PubSub.publish('b', '12344')
             //取消订阅
            PubSub.unSubscribe('b', testB)
            console.log('取消订阅',PubSub.message)
            PubSub.publish('b', '12344')
        }


        return {
            constructorPattern,
            prototypePattern,
            classPattern,
            singletonPattern,
            observerpPattern,
            publishSubscribe
        }
    },
}

</script>
