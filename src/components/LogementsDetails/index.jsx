import { useParams } from "react-router-dom"
import logementsList from "../../datas/logementsList"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';


function LogementDetails() {
    const { id } = useParams()
    const logement = logementsList.find(logement => logement.id === id)
    const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    return (
        <section className="accomodation-details">
          <div className="accomodation-img">
            <img src={logement.cover} alt={logement.title} />
          </div>
          <div className="accomodation-content">
            <div className="content-left">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
              <div className="tags">              
                <ul>
                  {logement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="content-right">
              <div className="content-name">
                <h3>{logement.host.name}</h3>
                <p className="content-picture" src={logement.host.picture} alt={logement.host.name}></p>
              </div>
              <div className="content-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon 
                    key={index}
                    icon={faStar}
                    className={index < logement.rating ? 'filled' : 'empty'}  
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="accomodation-collapse">
          <div className="collapse-description">
            <div className="collapse-style">
              <h3>Description</h3>
              <div className="title-item" onClick={() => toggleItem(0)}>
                {openIndex === 0 ? (
                  <FontAwesomeIcon className="collapse-icon" icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon  className="collapse-icon" icon={faChevronDown} />
                )}
              </div>
            </div>
            {openIndex === 0 && (
              <div className="content-item-style">
                <p>{logement.description}</p>
              </div>
            )}
          </div>
        <div className="collapse-equipments">
          <div className="collapse-style">
            <h3>Equipements</h3>
            <div className="title-item" onClick={() => toggleItem(1)}>
              {openIndex === 1 ? (
                <FontAwesomeIcon className="collapse-icon" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon className="collapse-icon" icon={faChevronDown} />
              )}
            </div>
          </div>
          {openIndex === 1 && (
            <div className="content-item-style eqpt">
              <ul>
                {logement.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      </section>
    )
  }

  export default LogementDetails