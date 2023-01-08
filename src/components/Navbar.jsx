import React, {useState} from 'react'
import './css/Navbar.sass'

const Nav = () => {

  // const values = [
  //   { id: 1, color: '#f44336', icon: <ion-icon name="home-outline"></ion-icon>},
  //   { id: 2, color: '#ffa117', icon: <ion-icon name="person-outline"></ion-icon>},
  //   { id: 3, color: '#0fc70f', icon: <ion-icon name="folder-open-outline"></ion-icon>},
  //   { id: 4, color: '#2196f3', icon: <ion-icon name="code-slash-outline"></ion-icon>},
  //   { id: 5, color: '#b145e9', icon: <ion-icon name="mail-open-outline"></ion-icon>}
  // ];
  const [activeId, setActiveId] = useState(1);

  return (
    <div className='body'>
      <div className="navigation">
      {/* <ul>
        {values.map((val) => (
          <li className={activeId === val.id ? 'list active' : 'list'} onClick={() => setActiveId(val.id)}>
            <a href='#'>
              <span className="icon">{val.icon}</span>
            </a>
          </li>
        ))}
        <div className='indicator'></div>
      </ul> */}
        <ul>
          <li className={activeId === 1 ? 'list active' : 'list'} onClick={() => setActiveId(1)}>
            <a href="#home">
              <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 2 ? 'list active' : 'list'} onClick={() => setActiveId(2)}>
            <a href="#about">
              <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 3 ? 'list active' : 'list'} onClick={() => setActiveId(3)}>
            <a href="#projects">
              <span className="icon"><ion-icon name="folder-open-outline"></ion-icon></span>
            </a>
          </li>
          <li className={activeId === 4 ? 'list active' : 'list'} onClick={() => setActiveId(4)}>
            <a href="#skills">
              <span className="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
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