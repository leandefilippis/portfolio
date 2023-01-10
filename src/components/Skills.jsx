import React from 'react'
import './css/Skills.sass'
import Postgre from './css/resources/postgre.png'
import Node from './css/resources/node.png'
import Css from './css/resources/css.png'
import Sass from './css/resources/sass.png'
import Html from './css/resources/html.png'
import ReactL from './css/resources/react.png'
import TS from './css/resources/ts.png'
import JS from './css/resources/js.png'
import Redux from './css/resources/redux.png'
import Sql from './css/resources/sql.png'
import Express from './css/resources/express.png'

const Skills = () => {
  return (
    <section id="skills-section">
        <p className='skills'>Skills</p>
        <div className='underline'></div>
      <div id='section-container'>
        <div id='tech-container'>
          <p id='hs'>Technologies</p>
          <div className='sm-underline'></div>
          <div className='grid-container'>
            <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img src={Html} alt="" /></a>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src={Css} alt="" /></a>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img src={Sass} alt="" /></a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src={TS} alt="" /></a>
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img src={JS} alt="" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={ReactL} alt="" /></a>
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img src={Redux} alt="" /></a>
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src={Postgre} alt="" /></a>
            <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer"><img src={Sql} alt="" /></a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img src={Node} alt="" /></a>
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><img src={Express} alt="" /></a>
          </div>
        </div>
        <div className='other-container'>
          <p id='hs'>Other</p>
          <div className='sm-underline'></div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Skills