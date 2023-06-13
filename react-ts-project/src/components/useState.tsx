import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
  // useState
  const [like, setLike] = useState(0)
  const [obj, setObj] = useState({ name: 'zhangsan', age: '12' })

  //useEffect---不清除副作用
  useEffect(() => {
    document.title = `点击了${like}次`
  })

  //useEffect---可清除副作用
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log(e)
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.getElementById('myBtn')?.addEventListener('click', updateMouse)
    //清除副作用
    return () => {
      console.log('remove', positions.x)
      document
        .getElementById('myBtn')
        ?.removeEventListener('click', updateMouse)
    }
  })
  console.log('before', positions.x)

  const [num, setNum] = useState(0)
  let timer:any
  useEffect(() => {
    timer = setInterval(() => {
      setNum(num + 1)
    }, 300)
  })
  useEffect(() => {
    if (num < 10) {
      clearInterval(timer)
    }
  },[num])
  return (
    <div>
      <h1>01useState</h1>
      <button
        onClick={() => {
          setLike(like + 1)
        }}
      >
        {like}
      </button>
      <button
        onClick={() => setObj({ ...obj, ...{ name: obj.name + obj.age } })}
      >
        {obj.name}
      </button>
      <h1>02useEffect----在render后执行---类似于componentDidMount</h1>
      <button
        onClick={() => {
          setLike(like + 1)
        }}
      >
        useEffect{like}----不清除副作用
      </button>
      <button id="myBtn">useEffect-----可清除副作用</button>
      <span>
        x:{positions.x},y:{positions.y}
      </span>
      <h1>03uesLayoutEffect----dom更新后执行----类似于compontWillmount</h1>
      <h1>04useMemo----返回值</h1>
      <h1>05useCallback-----返回函数</h1>
      <h1>06uesRef-----长久存储值</h1>
      <div>{num}</div>
    </div>
  )
}

export default LikeButton
