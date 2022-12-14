import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Default from './Default'
import TheNav from '../components/TheNav'

export default function Home() {
  return (
    <div className={styles.container}>
     
      <TheNav/>
      <Default/>
      <Footer/>
    </div>
  )
}
