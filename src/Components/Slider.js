import {useState} from 'react'
import "./Slider.css"
import dataSlider from '../datas/dataSlider'

export default function Slider() {
    const [slideAnim, setSlideAnim] = useState(1)

    const nextSlide = () => {
        
    }

    const prevSlide = () => {
        
    }

  return (
    <div className="container-slider">
        {dataSlider.map((obj, index) => {
            return(
                <div key={obj.id} className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}>
                    <img src={process.env.PUBLIC_URL + `/Images/img${index + 1}.jpg`} alt="paysage islande" />
                </div>
            )
        })}
    </div>
  )
}
