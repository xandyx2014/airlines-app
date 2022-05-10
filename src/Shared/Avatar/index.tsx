import style from './avatar.module.css'
interface AvatarProps {
  name: string
  trips: number
}
export const Avatar = ({ name, trips }: AvatarProps) => {
  return (
    <div className={style['user-card']}>
      <span className={style['user-info-holder']}>
        <h2 className={style.name}>{name}</h2>

        <div className={style.evaluations}>
          <span className={`${style.reviews} ${style.evaluation}`}>
            <span className="reviews-icon evaluation-icon">✈️</span>
            <span
              className={`${style['reviews-text']} ${style['evaluation-text']}`}
            >
              {trips} Reviews
            </span>
          </span>
        </div>

        <span className={style.button}>
          <button className={style['show-more-btn']}>Show More</button>
        </span>
      </span>
    </div>
  )
}
