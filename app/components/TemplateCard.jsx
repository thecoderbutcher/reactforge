import React from 'react'
import { DiCss3 } from "react-icons/di";
import { PiStarThin } from "react-icons/pi";
const TemplateCard = () => {
    return (
        <figure className='group flex flex-col bg-secondary-foreground shadow-lg shadow-s rounded-xl'> 
            <img src="/default.webp" alt="" className='rounded-t-xl' />  
            <figcaption className='flex flex-col gap-2 px-8 py-2'>
                <h3 className='text-3xl font-bold text-white'>Plantilla 1</h3>
                <p className='flex text-secondary text-xl justify-between py-2'>
                    <span className='flex items-center gap-1'><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/></span>
                    <span>$precio</span>
                </p>
                <button className='flex-1 p-2 bg-primary-foreground rounded-lg text-white'>Ver demo</button>
            </figcaption>
        </figure>
    )
}

export default TemplateCard