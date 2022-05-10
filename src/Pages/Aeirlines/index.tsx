import Card from '../../Shared/Card'
import { Navbar } from '../../Shared/Navbar'
import style from './aeirlines.module.css'

const Aeirlines = () => {
  return (
    <>
      <Navbar />
      <div className={style.cards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}
export default Aeirlines
