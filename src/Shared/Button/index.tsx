import { ButtonHTMLAttributes, ReactNode } from 'react'
import style from './button.module.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button className={style['show-more-btn']} {...props}>
      {props.children}
    </button>
  )
}
