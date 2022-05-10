import Card from '../../Shared/Card'
import { Navbar } from '../../Shared/Navbar'
import style from './aeirlines.module.css'
import useAirlines from './hook/useAirlines'

const Aeirlines = () => {
  const [airlines] = useAirlines()
  return (
    <>
      <Navbar />
      <div className={style.cards}>
        {airlines.map((airline) => {
          return (
            <Card
              key={airline.id}
              country={airline.country}
              img={airline.logo}
              foundation={airline.established}
              name={airline.name}
              website={airline.website}
            />
          )
        })}
      </div>
    </>
  )
}
export default Aeirlines
