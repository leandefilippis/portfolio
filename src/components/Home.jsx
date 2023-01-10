import React from 'react'
import './css/Home.sass'
import background from './css/resources/homewall2.png'
import sign from './css/resources/whitelean.png'

const Home = () => {
  return (
    <section id="home">
      <img className="background" src={background} alt=''></img>
      <img className="sign" src={sign} alt="" />
      <div className="header">
        <p className="title">Leandro De Filippis</p>
        <p className="foot">Fullstack Developer</p>
        <a href='https://www.linkedin.com/in/leandrodefilippis/' target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href='https://github.com/leandefilippis' target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a>
        <a href='https://drive.google.com/file/d/1stGfjBovxPh4uNoOaEpT3rDWMTuf-Sh7/view?usp=share_link' target="_blank" rel="noopener noreferrer"><ion-icon name="document-outline"></ion-icon></a>
        <a href='mailto:leandefilippis@gmail.com' target="_blank" rel="noopener noreferrer"><ion-icon name="mail-outline"></ion-icon></a>
      </div>
    </section>
  )
}

export default Home