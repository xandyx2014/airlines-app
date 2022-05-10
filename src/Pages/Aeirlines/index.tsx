import Card from '../../Shared/Card'
import { Loading } from '../../Shared/Loading/Loading'
import { Navbar } from '../../Shared/Navbar'
import style from './aeirlines.module.css'
import useAirlines from './hook/useAirlines'

const Aeirlines = () => {
  const [airlines, isLoading] = useAirlines()
  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      <div className={style.cards}>
        {airlines.map((airline, index) => {
          return (
            <Card
              key={airline.id}
              country={airline.country}
              img={airline.logo}
              foundation={airline.established}
              name={airline.name}
              website={airline.website}
              isOdd={index % 2 === 0}
            />
          )
        })}
      </div>
    </>
  )
}
export default Aeirlines
