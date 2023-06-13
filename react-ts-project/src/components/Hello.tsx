function demo(data: { x: string; y: string }) {
  return data.x + data.y
}
//当参数不存在时会报错
// console.log(demo())

console.log(demo({ x: '吃', y: '饭' }))

// interface:自定义静态类型
interface Point {
  x: string
  y: number
}

const point: Point = {
  x: '吃',
  y: 3,
}

console.log('自定义静态类型:', point.x, point.y)

// 基础类型: null undefined stymbol boolean number string void
const str: string = 'cheng'
const num: number = 123
const bool: boolean = false
const nul: null = null
//对象类型
let obj: {
  name: string
  age: number
} = {
  name: 'cheng',
  age: 12,
}

// 数组类型
let arr: any[] = [123, '234324']

// 函数类型

let fun: () => number = () => {
  return 12
}
console.log('基础类型:', str, num, bool, nul, obj, arr, fun)

//类型注解
let count: string;
count = '张三'

console.log('类型注解:', count)

// ts中函数
function fn(name:string,age:number):string {
    return name+age
}
console.log('ts中函数:',fn('张三',24))
interface Props {
  mes?: string
}
const Hello = (props: Props) => {
  return <h2>{props.mes}</h2>
}
export default Hello
