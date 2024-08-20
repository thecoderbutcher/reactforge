import { DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall } from "react-icons/di"; 
const Hero = () => {
    const techIcons = [
        {
            name: "HTML5",
            icon: <DiHtml5 className="hover:text-orange-600"/>
        },
        {
            name: "CSS3",
            icon: <DiCss3 className="hover:text-blue-600"/>
        },
        {
            name: "Javascript",
            icon: <DiJavascript className="hover:text-yellow-500"/>
        },
        {
            name: "React",
            icon: <DiReact className="hover:text-indigo-600"/>
        },
        {
            name: "Node.js",
            icon: <DiNodejsSmall className="hover:text-green-600"/>
        },  
    ]
    return (
        <section className="flex flex-col gap-4 items-center justify-center text-center mt-16">
            <article className="flex flex-col gap-4 w-full mt-4">
                <h1 className="text-3xl font-semibold text-wrap text-center capitalize text-secondary">
                    Plantillas de sitio web 
                </h1>
                <p className="text-xl text-accent/80 capitalize">
                    landing page, dashboard y aplicaciones
                </p>
            </article>
            <article className="w-full mt-8">
                <input type="text" className="w-full p-2 rounded-lg text-secondary-foreground border-2 shadow-lg shadow-accent/50 focus:outline-none focus:border-primary focus:shadow-primary/50 transition-all duration-300 " placeholder="Encuentra tu plantilla"/>
            </article>
            <article className="w-full mt-8">
                <ul className="flex flex-row items-start justify-center gap-4 text-2xl text-secondary">
                    {techIcons.map((icon, index) => (
                        <li key={index} className="w-10 h-10">
                            {icon.icon}
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default Hero