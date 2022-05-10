import React from 'react'
import './LinearProgressIndicator.css'
interface Props {
  size?: string
  color?: string
}

const LinearProgressIndicator: React.FC<Props> = ({
  size = '3px',
  color = 'red',
}) => {
  return (
    <div
      style={{
        fontSize: size,
      }}
      id="loaderBar"
    >
      <div id="bar" style={{ color: `${color}` }}></div>
    </div>
  )
}
export default LinearProgressIndicator
