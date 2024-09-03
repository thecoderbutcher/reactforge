/* eslint-disable @next/next/no-img-element */
import { PiStarThin } from "react-icons/pi";
const TemplateCard = ({template}) => {
    return (
        <figure className='group flex flex-col bg-secondary-foreground shadow-2xl shadow-primary-foreground/50 rounded-xl hover:scale-105 hover:shadow-primary/60 hover:shadow-lg transition-all duration-300 '> 
            <img src="/default.webp" alt="" className='rounded-t-xl' />  
            <figcaption className='flex flex-col gap-2 px-8 py-2'>
                <h3 className='text-3xl font-bold text-white md:text-2xl lg:text-xl'>{template.name}</h3>
                <p className='flex text-secondary text-xl justify-between py-2 md:text-lg'>
                    <span className='flex items-center gap-1'><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/></span>
                    <span>${template.price}</span>
                </p>
                <button className='flex-1 p-2 bg-primary-foreground rounded-lg text-white'>Ver demo</button>
            </figcaption>
        </figure>
    )
}

export default TemplateCard