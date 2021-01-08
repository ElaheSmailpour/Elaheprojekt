import React,{useState} from 'react'
import {faArrowAltCircleleft} from 'react-icons/fa'
import Slider from './Slider'
import './Slider.css'
const Bilder = ({slides}) => {
    const[current,setCurrent]=useState(0)
    const nextslide=()=>{
setCurrent(current===length-1 ? 0 : current +1)
    }
    console.log("current=",current)
    const prevslide=()=>{
        setCurrent(current===0 ?  length -1:current -1 )
    }
    const length=slides.length;
    if(!Array.isArray(slides) || (slides.length<=0)){
        return null
    }
    return(
        <section className="slider">
     <faArrowAltCircleleft className="left-Arrow" onClick={prevslide}/>
     <faArrowAltCircleleft className="right-Arrow" onClick={nextslide}/>
<h2>Meine Galerie</h2>
{Slider.map((slide,index)=>{
    return (
       <div className={index===current ? "slide active" : "slide"} key={index}>
           {index===current &&   <img src={slide.image} alt="Bilder" className="image"/>}
           

       </div>
    )
})}
</section>
          )
  }
  
  export default Bilder
  