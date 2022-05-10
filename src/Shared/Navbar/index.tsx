import { Link } from 'react-router-dom'
import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>Encora Company </div>
      <div className={style.menu}>
        <a href="#" className={style.link}>
          <Link to="" className={style.title}>
            airlines
          </Link>

          <div className={style.bar}></div>
        </a>
        <a href="#" className={style.link}>
          <Link to="/passenger" className={style.title}>
            Passenger
          </Link>

          <div className={style.bar}></div>
        </a>
      </div>
    </div>
  )
}
