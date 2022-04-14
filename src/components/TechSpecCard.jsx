import React from 'react'
import {FaApple, FaSlack, FaWindows, FaGoogle} from 'react-icons/fa'

function TechSpecCard({linkPath, icon, title, description, noSvg, hasSvg }) {
  return (
    <div className='tech-spec-card'>

      <a 
        href={linkPath}
        target='_blank'
        className='tech-spec-card__link-wrap'
      >
        <div className="tech-spec-card__icon-container">
          {icon}
        </div>
        <h4 className="tech-spec-card__title">
          {title}
        </h4>
        <p className="tech-spec-card__description">
          {description}
        </p>

        {noSvg && (<div>
          <p className='tech-spec-card__no-svg'>Learn More</p>
        </div>)}

        {hasSvg && (<div className='tech-spec-card__has-svg'>
          <FaApple />
          <FaSlack color='rgb(224, 30, 90)'/>
          <FaWindows color='rgb(127, 186, 0)'/>
          <FaGoogle color='rgb(66, 133, 244)'/>
        </div>)}

      </a>
    </div>
  )
}

export default TechSpecCard