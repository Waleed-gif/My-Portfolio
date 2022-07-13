import React from 'react'
import './about.css';
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
                <FiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>100+ Clients WorldWide</small>
            </article>
            <article className='about_card'>
                <VscFolderLibrary className='about_icon' />
                <h5>Projects</h5>
                <small>20+ Projects Completed</small>
            </article>
          </div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
