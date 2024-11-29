import React from 'react'
import './about.css'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import sql from '../../assets/database.png'
import Card from '../Card/Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const About = () => {
useGSAP(()=>{
  gsap.from(".circle",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
    }
  })

  gsap.from(".line",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".line",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
    }
  })

  gsap.from(".aboutdetails h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutdetails h1",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
    }
  })

  gsap.from(".aboutdetails ul",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutdetails ul",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
    }
  })

  gsap.from(".rightabout ",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".rightabout",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
    }
  })
})
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
            <li>
              <span>NAME</span> : SANJANA RAUT
            </li>

            <li>
              <span>AGE</span> :  21 YEARS
            </li>

            <li>
              <span>GENDER</span> : FEMALE
            </li>

            <li>
              <span>LANGUAGE</span> : ENGLISH , HINDI , MARATHI
            </li>
            </ul>
          </div>

          <div className="education">
            <h1> Education</h1>
            <ul>
            <li>
              <span>DEGREE</span> : BSC.IT
            </li>
            <li>
              <span>COLLEGE</span> : BHAVANS COLLEGE,ANDHERI
            </li>

            <li>
              <span>CGPA</span> :  7.9
            </li>
            </ul>
          </div>

          <div className="skills">
            <h1> Skills</h1>
            <ul>
            <li>
              MERN STACK
            </li>

            <li>
              SQL
            </li>

            <li>
              JAVA
            </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} link="#"/>
        <Card title="JAVA" image={java} />
        <Card title="SQL" image={sql}/>

      </div>
    </div>
  )
}

export default About