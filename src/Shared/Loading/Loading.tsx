import style from './loading.module.css'

export const Loading = () => {
  return (
    <div className={style.container}>
      <div className={`${style['lds-roller']}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
