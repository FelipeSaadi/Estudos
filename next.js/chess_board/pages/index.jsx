import Subdivision from '../components/SubDivision'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Subdivision />
      <Subdivision />
      <Subdivision />
    </div>
  )
}
