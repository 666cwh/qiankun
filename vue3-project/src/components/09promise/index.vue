<template>
    <h1>09promise</h1>
    <button @click="promiseBtn">promise</button>
    <button @click="customPromise">自定义promise</button>
</template>
<script>
export default {
    setup () {
        //promis使用
        const promiseBtn = () => {
            let promiseTea = new Promise((resolve, reject) => {
                let num = 5
                setTimeout(function () {
                    if (num > 3) {
                        resolve('奶茶')
                    } else {
                        reject('cuowu')
                    }
                }, 6000)
                setTimeout(() => {
                    console.log('naicha123')
                }, 3000)
                console.log('naicha')
            })

            let promiseHot = new Promise((resolve, reject) => {
                let num = 2
                // setTimeout(function () {
                //   if (num > 3) {
                //     resolve('火锅')
                //   } else {
                //     reject('错误')
                //   }
                // }, 6000)
                resolve('火锅')
                console.log('huoguo')
            })

            promiseTea
                .then(
                    (res) => {
                        console.log(res)
                        return promiseHot
                    },
                    (err) => {
                        console.log(err)
                    }
                )
                .then(
                    (res) => {
                        console.log(res)
                    },
                    (err) => {
                        console.log(err)
                    }
                )
        }

        //自定义promise
        const customPromise = () => {
            //成功状态
            const RESOLVE = 'resolved'
            //失败状态
            const REJECT = 'rejecuted'
            //默认状态,resolve和reject不能同时存在需要
            const PENDING = 'pending'


            class promise {
                status = PENDING
                result = undefined
                reason = undefined
                onResolvedArr = []
                onRejectedArr = []
                constructor(excution) {
                    const resolve = (result) => {
                        if (this.status === PENDING) {
                            this.result = result
                            this.status = RESOLVE
                            this.onResolvedArr.map(fn => fn())
                        }
                    }
                    const reject = (reason) => {
                        if (this.status = PENDING) {
                            this.reason = reason
                            this.status = REJECT
                            this.onRejectedArr.map(fn => fn())
                        }
                    }
                    excution(resolve, reject)
                }
                then (onResolved, onRejected) {
                    const newpromise = (resolve, reject) => {
                        // 状态为成功时
                        if (this.status = RESOLVE) {
                            //异步
                            setTimeout(() => {
                                onResolved(this.result)
                            }, 0)

                        }
                        //状态为失败时
                        if (this.status = REJECT) {
                            setTimeout(() => {
                                onRejected(this.reason)
                            }, 0)

                        }

                        if (this.status = PENDING) {
                            this.onResolvedArr.push(() => { onResolved(this.result) })
                            this.onRejectedArr.push(() => { onRejected(this.reason) })
                        }
                    }
                    return newpromise;

                }
            }
            // 使用
            let test = new promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('promise成功')
                }, 3000)
            })
            test.then((res => {
                console.log(res)
            }), (err) => {
                console.log(err)
            })
            console.log(123)
        }
        return {
            promiseBtn,
            customPromise,
        }
    },
}
</script>
