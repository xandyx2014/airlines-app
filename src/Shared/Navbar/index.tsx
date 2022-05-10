import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>Encora Company </div>
      <div className={style.menu}>
        <a href="#" className={style.link}>
          <div className={style.title}>About</div>
          <div className={style.bar}></div>
        </a>
        <a href="#" className={style.link}>
          <div className={style.title}>Work</div>
          <div className={style.bar}></div>
        </a>
      </div>
    </div>
  )
}
