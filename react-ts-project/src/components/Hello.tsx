let numberString: number[] = [1, 2, 3]

interface IPerson {
  readonly id: number
  name: string
  age?: number
}

let viking: IPerson = {
  id: 1,
  name: 'zhangsan',
  //   age: 12,
}

console.log(numberString, viking)

function add(x: number, y: number, z?: number): number {
  if (z) {
    return x + y + z
  } else {
    return x + y
  }
}

console.log(add(2, 3, 4))

//枚举
enum Direction {
  Up,
  Down,
  left,
  right,
}

console.log(Direction, Direction.Up)

//泛型
function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result: string = echo(str)

console.log(result)

interface Props {
  mes?: string
}
const Hello = (props: Props) => {
  return <h2>{props.mes}</h2>
}
export default Hello
