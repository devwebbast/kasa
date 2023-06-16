import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const aboutItems = [
    {
        title: 'Fiabilité',
        content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
    },
    {
        title:'Respect',
        content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.` 
    },
    {
        title: 'Service',
        content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`  
    },
    {
        title: 'Sécurité',
        content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    }
]
function About (){
    const [openIndex, setOpenIndex] = useState(null)
    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return(
        <section className="about-section">
            <div className="about-img">
                <div className="about-filter"></div>
            </div>
            <div className="about-content">
                {aboutItems.map((item, index) => (
                    <div key={index}>
                        <div className="title-item" onClick={() => toggleItem(index)}>
                            <h2>{item.title}</h2>
                            {openIndex === index ? (
                               <FontAwesomeIcon icon={faChevronUp} />
                                ) : (
                                <FontAwesomeIcon icon={faChevronDown} />
                                )}
                    </div>
                    {openIndex === index && (
                        <div className="content-item">
                            <p>{item.content}</p>
                        </div>
                    )}
                    </div>
                ))}
            </div> 
        </section>
    )
}
export default About