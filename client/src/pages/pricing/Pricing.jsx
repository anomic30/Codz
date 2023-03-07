import React from 'react'
import { useNavigate } from "react-router-dom"
import './Pricing.scss'
import Footer from '../../components/footer/Footer'
import fullLogo from '../../assets/icons/codz-full-logo.svg'
import PricingBox from '../../components/pricingBox/PricingBox'
import loginCard from '../../assets/gradients/login-card.png'
import loginLeft from '../../assets/gradients/login-left.png'
import loginRight from '../../assets/gradients/login-right.png'
import { Container} from '@mantine/core';

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div className='Pricing'>

      <nav className="navbar">
        <div className="navbar-content">
          <img onClick={() => navigate("/")} src={fullLogo} alt="logo" />
          <div className="nav-links">
            <div onClick={() => navigate("/pricing")}>Pricing</div>
            <a onClick={() => navigate("/register")}><div className="nav-btn">Use Now</div></a>
          </div>
        </div>
      </nav>
      <img src={loginLeft} className="login-left" alt="gradient" />
      <img src={loginCard} className="login-center" alt="gradient" />
      <img src={loginRight} className="login-right" alt="gradient" />
      <Container size={1200}></Container>
        <PricingBox />
      <Footer/>
      <Container size={1200}></Container>
    </div>
  )
}

export default Pricing