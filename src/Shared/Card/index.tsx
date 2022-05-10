import style from './card.module.css'
interface CardProps {
  name: string
  country: string
  img: string
  website: string
  foundation: string
}
const Card = ({ name, country, foundation, img, website }: CardProps) => (
  <>
    <div className={style.cards}>
      <div className={style.card}>
        <div className={style['card-hero']}>
          <img src={img} width="288" />
        </div>
        <div className={style['card-header']}>
          <h3>{name}</h3>
        </div>
        <div className={style['card-header']}>
          <h3>{website}</h3>
        </div>
        <div className={style['card-body']}>
          <p>Country: {country}</p>
        </div>
        <div className={style['card-footer']}>
          <div className={style['footer-item']}>
            <img src={img} className={style.avatar} width="32" height="32" />
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
