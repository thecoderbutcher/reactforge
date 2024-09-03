'use client'
import TemplateCard from "../app/components/TemplateCard";
import { landing, dashboard, applications } from "@/constant";
export const TemplateSection = () => {
    let topRanked = [];
    let lastAdded = [];
    const mostValue = (templates) => 
        (templates
            .map(template => {
                const totalCalification = template.comments.reduce((sum, comment) => sum + parseFloat(comment.calification), 0);
                const averageCalification = totalCalification / template.comments.length;
                return { ...template, averageCalification };
            })
            .sort((a, b) => b.averageCalification - a.averageCalification)
            .slice(0, 1))
    
    topRanked.push(mostValue(dashboard))
    topRanked.push(mostValue(landing))
    topRanked.push(mostValue(applications))
    topRanked =topRanked.flat()
    console.log(topRanked)
    lastAdded.push(landing.slice(-1)[0]) 
    lastAdded.push(dashboard.slice(-1)[0])
    lastAdded.push(applications.slice(-1)[0])
    return (
        <section className="flex flex-col gap-14 container">
            <article className="lg:flex flex-col">
                <h2 className="text-2xl font-bold text-secondary">Mejor Valorados</h2>
                <div className="flex flex-col gap-8 mt-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {topRanked.map((template, index) => (
                        <TemplateCard key={index} template={template}/>
                    ))} 
                </div>  
            </article>
            <article>
                <h2 className="text-2xl font-bold text-secondary">Recien Agregados</h2>
                <div className="flex flex-col gap-8 mt-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {lastAdded.map((template, index) => (
                        <TemplateCard key={index} template={template}/>
                    ))} 
                </div>  
            </article>
        </section>
    )
}
