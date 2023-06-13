import React, { useState, useReducer } from 'react'
// 数据仓库
const store = {
  num: 1,
}

//管理者
const reducer = (state, action) => {
  switch (action.type) {
    case 'changNumber':
      return {
        ...state,
        num: action.num,
      }
    default:
      return {
        ...state,
      }
  }
}


const ReduxCompent = () => {
  // 使用reducer
  const [state, dispatch] = useReducer(reducer, store)

  return (
    <div>
      <h1>01Redux</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'changNumber',
            num: 100,
          })
        }}
      >
        修改store
      </button>
      {state.num}
    </div>
  )
}


export default ReduxCompent
