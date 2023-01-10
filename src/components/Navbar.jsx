import React, {useState} from 'react'
import './css/Navbar.sass'

const Nav = () => {
  const [activeId, setActiveId] = useState(1);
  const section3 = window.innerHeight*2
  const section4 = window.innerHeight*3
  const section5 = window.innerHeight*4

  const changeNav = () => {
    if(window.scrollY < window.innerHeight - window.innerHeight/2.5){return setActiveId(1)}
    if(window.scrollY >= window.innerHeight - window.innerHeight/2.5 && window.scrollY < section3 - window.innerHeight/2.5){return setActiveId(2)}
    if(window.scrollY >= section3 - window.innerHeight/2.5 && window.scrollY < section4 - window.innerHeight/2.5){return setActiveId(3)}
    if(window.scrollY >= section4 - window.innerHeight/2.5 && window.scrollY < section5 - window.innerHeight/2.5){return setActiveId(4)}
    if(window.scrollY >= section5 - window.innerHeight/2.5){return setActiveId(5)}
  }
  
  window.addEventListener('scroll', changeNav)

  return (
    <div className='body'>
      <div className="navigation">
        <ul>
          <li className={activeId === 1 ? 'list active' : 'list'} onClick={() => setActiveId(1)}>
            <a href="#home">
              <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 2 ? 'list active' : 'list'} onClick={() => setActiveId(2)}>
            <a href="#skills-section">
              <span className="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 3 ? 'list active' : 'list'} onClick={() => setActiveId(3)}>
            <a href="#projects">
              <span className="icon"><ion-icon name="folder-open-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 4 ? 'list active' : 'list'} onClick={() => setActiveId(4)}>
            <a href="#about">
              <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 5 ? 'list active' : 'list'} onClick={() => setActiveId(5)}>
            <a href="#contact">
              <span className="icon"><ion-icon name="mail-open-outline"></ion-icon></span>
            </a>
          </li>
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  )
}

export default Nav