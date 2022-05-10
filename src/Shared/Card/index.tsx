import style from './card.module.css'

const Card = () => (
  <>
    <div className={style.cards}>
      <div className={style.card}>
        <div className={style['card-hero']}>
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
            width="288"
          />
        </div>
        <div className={style['card-header']}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>
        <div className={style['card-body']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            facilisis gravida neque convallis a. Volutpat diam ut venenatis
            tellus.
          </p>
        </div>
        <div className={style['card-footer']}>
          <div className={style['footer-item']}>
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzc5MQ&ixlib=rb-1.2.1&q=85"
              className={style.avatar}
              width="32"
              height="32"
            />
          </div>
          <div className={style['footer-item']}>
            <strong>John Doe</strong>
            <span className="muted">2h ago</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Card
