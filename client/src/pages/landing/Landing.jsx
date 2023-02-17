import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.scss'
import fullLogo from '../../assets/codz-full-logo.svg'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="Landing">

      <nav className="navbar">
        <div className="navbar-content">
          <img src={fullLogo} alt="logo" />
          <div className="nav-links">
            <div>Pricing</div>
            <div>Feature</div>
            <div className="nav-btn">Use Now</div>
          </div>
        </div>
      </nav>
      <section className='hero'>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Landing