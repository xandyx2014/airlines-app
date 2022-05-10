import style from './select.module.css'

interface SelectProps {
  onChange: (value: string) => void
  value: number | string
}
export const Select = ({ onChange, value }: SelectProps) => {
  return (
    <select
      className={style.select}
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    >
      <option value="5">5</option>
      <option value="10" selected>
        10
      </option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  )
}
