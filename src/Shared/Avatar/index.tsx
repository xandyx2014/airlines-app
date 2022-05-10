import { AirlineModel } from '../../Services/Airlines/airlinesModel'
import { Passenger } from '../../Services/Passenger/passengerModel'
import { Button } from '../Button'
import style from './avatar.module.css'
interface AvatarProps {
  passenger: Passenger
  onClick: (airline: AirlineModel[]) => void
  onDelete: (passenger: Passenger) => void
  onUpdate: (passenger: Passenger) => void
  disabled?: boolean
}
export const Avatar = ({
  passenger,
  onClick,
  onDelete,
  onUpdate,
  disabled = false,
}: AvatarProps) => {
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
          <Button
            onClick={() => {
              onClick(passenger.airline)
            }}
            disabled={disabled}
          >
            Show More
          </Button>
          <Button
            onClick={() => {
              onUpdate(passenger)
            }}
            disabled={disabled}
          >
            Edit 📚
          </Button>
          <Button
            onClick={() => {
              onDelete(passenger)
            }}
            disabled={disabled}
          >
            Delete 📥
          </Button>
        </span>
      </span>
    </div>
  )
}
