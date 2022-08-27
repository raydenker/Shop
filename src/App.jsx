import React from "react"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Shop} from "./components/Shop"
import styles from './index.css'
function App() {
  return (
    <>
    <Header/>
    <Shop/>
    <div className={styles.BasketItem}></div>
    <Footer/>
    </>
   
  )
}

export default App
