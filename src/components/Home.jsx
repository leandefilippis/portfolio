import React from 'react'
import './css/Home.sass'
import background from './css/resources/homewall2.png'
import sign from './css/resources/whitelean.png'

const Home = () => {
  return (
    <section className='home'>
      <img className="background" src={background} alt=''></img>
      <img className="sign" src={sign} alt="" />
      <div className="header">
        <p className="title">Leandro De Filippis</p>
        <p className="foot">Fullstack Developer</p>
      </div>
    </section>
  )
}

export default Home