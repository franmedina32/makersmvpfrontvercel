import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import '../styles/footerStyle.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div>
          <p className='footerp'>Personal Linkedin <a href='https://www.linkedin.com/in/francisco-medina-288998228/'><BsLinkedin/></a></p>
        </div>
        <div>
          <p className='footerp'>Proyect Repository in GitHub <a href='https://github.com/franmedina32/makersMVP/tree/master/makersMVP'><BsGithub/></a></p>
        </div>
      </div>
      <div>
        <p className='footerp'>Developed By Francisco Medina</p>
      </div>
    </div>
  )
}

export default Footer