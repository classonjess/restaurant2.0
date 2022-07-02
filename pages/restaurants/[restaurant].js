import {useRouter} from "next/router"
import styles from "../../styles/Home.module.css"

export default function Restaurant() {
  const router= useRouter()
  return (
  <h1> Dynamic restaurant page {router.query.restaurant}</h1>
  )
}