import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.scss'
import fullLogo from '../../assets/icons/codz-full-logo.svg'
import dmatter from '../../assets/images/darkmater.gif'
import coding from '../../assets/images/coding.svg'
import next_gen from '../../assets/images/next-gen.svg'
import openai from '../../assets/images/openai.png'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="Landing">

      <nav className="navbar">
        <div className="navbar-content">
          <img src={fullLogo} alt="logo" />
          <div className="nav-links">
            <div><a href=""> Pricing</a></div>
            <div><a href="">Feature</a></div>
            <a href=""><div className="nav-btn">Use Now</div></a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="title">
            <h1>
              THE
              FUTURE.
            </h1>
          </div>
          <div className="sub-title">
            <p>
              The ultimate coding platform that lets you unleash the full potential of your coding skills with the power of our cutting edge Artificial Intelligence
            </p>
          </div>
        </div>
      </section>

      <section className="hero-graphics">
        <img src={next_gen} alt="Next-Gen" />
        <img  src={dmatter} alt="Dark Matter" />
        <img  src={coding} alt="Coding" />
      </section>

      <section className="intro">
        <div className="intro-content">
          <div className="intro-desc">
            <p className="intro-title">Introducing <span id="gradient">Codz</span></p>
            <p className="intro-sub-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptate veniam quibusdam quod! Consectetur nostrum reiciendis neque quasi amet possimus quia ut officia, hic dolor necessitatibus cum ab perferendis blanditiis?</p>
          </div>
          <div className="intro-graphic">
            <img src={openai} alt="OpenAI" />
          </div>
        </div>
      </section>

      <div className="playground">
        <div className="playground-content">

        </div>

      </div>
    </div>
  )
}

export default Landing