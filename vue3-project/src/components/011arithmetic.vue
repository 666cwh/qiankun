<template>
    <h1>11算法</h1>
    <button @click="bubbleSort">冒泡排序</button>
</template>
<script>

export default ({
    setup () {
        //冒泡排序
        const bubbleSort = () => {
            console.log('冒泡排序')
            Array.prototype.bubble = function () {
                console.log(this)
                // debugger
                for (let j = 0; j < this.length - 1; j++) {
                    if (this[j] > this[j + 1]) {
                        const temp = this[j]
                        this[j] = this[j + 1]
                        this[j + 1] = temp
                    }
                }
                console.log(this)
            }
            const arr = [4, 3, 8, 1, 9, 6]
            arr.bubble()

        }
        return {
            bubbleSort
        }
    },
})
</script>
