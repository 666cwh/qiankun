<template>
    <h1>11算法</h1>
    <button @click="bubbleSort">冒泡排序</button>
    <button @click="selectionSort">选择排序</button>
    <button @click="insertionSorting">插入排序</button>
    <button @click="quickSort">快速排序</button>
</template>
<script>

export default ({
    setup () {
        //冒泡排序  比较相邻的元素。如果第一个比第二个大，就交换他们两个
        const bubbleSort = () => {
            console.log('冒泡排序')
            Array.prototype.bubble = function () {
                console.log(this)
                debugger;
                for (let i = 0; i < this.length - 1; i++) {
                    for (let j = 0; j < this.length - 1 - i; j++) {
                        if (this[j] > this[j + 1]) {
                            const temp = this[j]
                            this[j] = this[j + 1]
                            this[j + 1] = temp
                        }
                    }
                }

                console.log(this)
            }
            const arr = [4, 3, 8, 1, 9, 6]
            arr.bubble()

        }


        //选择排序  首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
        const selectionSort = () => {
            console.log('选择排序')
            Array.prototype.selection = function () {
                console.log(this)
                debugger;
                for (let i = 0; i < this.length - 1; i++) {
                    let indexMin = i;
                    for (let j = i; j < this.length; j++) {
                        if (this[j] < this[indexMin]) {
                            indexMin = j
                        }
                    }
                    if (indexMin !== i) {
                        const temp = this[i]
                        this[i] = this[indexMin]
                        this[indexMin] = temp
                    }
                }

                console.log(this)
            }
            const arr = [4, 3, 8, 1, 9, 6]
            arr.selection()
        }



        //插入排序
        const insertionSorting = () => {
            Array.prototype.insertion = function () {
                console.log(this)
                debugger;
                for (let i = 1; i < this.length; i++) {
                    const temp = this[i]
                    let j = i;
                    while (j > 0) {
                        if (this[j - 1] > temp) {
                            this[j] = this[j - 1]
                        } else {
                            break
                        }
                        j -= 1
                    }
                    this[j] = temp
                }
                console.log(this)
            }
            const arr = [4, 3, 8, 1, 9, 6]
            arr.insertion()
        }



        //快速排序
        const quickSort = () => {
            console.log('快速排序')
        }



        return {
            bubbleSort,
            selectionSort,
            insertionSorting,
            quickSort
        }
    },
})
</script>
