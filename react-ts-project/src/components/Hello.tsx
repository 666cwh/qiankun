import React from 'react'

interface Props {
  mes?: string
}
const Hello = (props: Props) => {
  return <h2>{props.mes}</h2>
}
export default Hello
