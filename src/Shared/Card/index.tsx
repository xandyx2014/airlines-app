import style from './card.module.css'
interface CardProps {
  name: string
  country: string
  img: string
  website: string
  foundation: string
  isOdd?: boolean
}
const Card = ({
  name,
  country,
  foundation,
  img,
  website,
  isOdd = false,
}: CardProps) => (
  <>
    <div className={style.cards}>
      <div className={`${style.card} ${isOdd && style['card-odd']}`}>
        <div className={style['card-header']}>
          <h3>{name}</h3>
        </div>
        <div className={style['card-header']}>
          <a href={`//${website}`} target="_blank">
            {website}
          </a>
        </div>
        <div className={style['card-body']}>
          <p>Country: {country}</p>
        </div>
        <div className={style['card-footer']}>
          <div className={style['footer-item']}>
            <img src={img} className={style.avatar} />
          </div>
          <div className={style['footer-item']}>
            <strong>Established</strong>
            <span className="muted">{foundation}</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Card
