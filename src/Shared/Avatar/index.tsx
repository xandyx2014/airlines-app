import style from './avatar.module.css'
interface AvatarProps {
  name: string
  trips: number
  onClick?: () => void
}
export const Avatar = ({ name, trips, onClick }: AvatarProps) => {
  return (
    <div className={style['user-card']}>
      <span className={style['user-info-holder']}>
        <h2 className={style.name}>{name}</h2>
        <div className={style.evaluations}>
          <span className={`${style.reviews} ${style.evaluation}`}>
            <span>✈️</span>
            <span
              className={`${style['reviews-text']} ${style['evaluation-text']}`}
            >
              {trips} Reviews
            </span>
          </span>
        </div>

        <span className={style.button}>
          <button className={style['show-more-btn']} onClick={onClick}>
            Show More
          </button>
        </span>
      </span>
    </div>
  )
}
