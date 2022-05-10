import { Link } from 'react-router-dom'
import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>Encora Company </div>
      <div className={style.menu}>
        <div className={style.link}>
          <Link to="/" className={style.title}>
            airlines
          </Link>

          <div className={style.bar}></div>
        </div>
        <div className={style.link}>
          <Link to="/passenger" className={style.title}>
            Passenger
          </Link>

          <div className={style.bar}></div>
        </div>
      </div>
    </div>
  )
}
