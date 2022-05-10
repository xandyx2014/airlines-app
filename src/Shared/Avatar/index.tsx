import { AirlineModel } from '../../Services/Airlines/airlinesModel'
import { Passenger } from '../../Services/Passenger/passengerModel'
import style from './avatar.module.css'
interface AvatarProps {
  passenger: Passenger
  onClick: (airline: AirlineModel[]) => void
  onDelete: (airline: Passenger) => void
}
export const Avatar = ({ passenger, onClick, onDelete }: AvatarProps) => {
  return (
    <div className={style['user-card']}>
      <span className={style['user-info-holder']}>
        <h2 className={style.name}>{passenger.name}</h2>
        <div className={style.evaluations}>
          <span className={`${style.reviews} ${style.evaluation}`}>
            <span>✈️</span>
            <span
              className={`${style['reviews-text']} ${style['evaluation-text']}`}
            >
              {passenger.trips} Reviews
            </span>
          </span>
        </div>

        <span className={style.button}>
          <button
            className={style['show-more-btn']}
            onClick={() => {
              onClick(passenger.airline)
            }}
          >
            Show More
          </button>
        </span>
        <span className={style.button}>
          <button
            className={style['show-more-btn']}
            onClick={() => {
              onDelete(passenger)
            }}
          >
            Delete 📥
          </button>
        </span>
      </span>
    </div>
  )
}
