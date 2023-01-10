import React from 'react'
import './css/Skills.sass'
import Postgre from './css/resources/postgre.png'

const Skills = () => {
  // const techarr = [
  //   {
  //   id: 'react',
  //   name: 'React',
  //   doc: 'https://reactjs.org/',
  //   icon: <ion-icon id='react' name="logo-react"></ion-icon>,
  //   }
  // ]

  return (
    <section id="skills-section">
        <p className='skills'>Skills</p>
        <div className='underline'></div>
      <div id='section-container'>
        <div id='tech-container'>
          <p id='hs'>Technologies</p>
          <div className='sm-underline'></div>
          <div className='grid-container'>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='html' name="logo-html5"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='css' name="logo-css3"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='react' name="logo-react"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='angular' name="logo-angular"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='javascript' name="logo-javascript"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='sass' name="logo-sass"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><ion-icon id='npm' name="logo-npm"></ion-icon></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={Postgre} alt="" /></a>
          </div>
        </div>
        <div className='other-container'>
            <p id='hs'>Other</p>
          <div className='sm-underline'></div>
          </div>
      </div>
    </section>
  )
}

export default Skills