import React from 'react'

function RecentPostCard({title, imgSrc, linkTitle, linkPath}) {
  return (
    <article className='recent-post-card'>
      <div className='recent-post-card__img-box'>
        <img 
          src={imgSrc}
          alt="recent post" 
          className='recent-post-card__img'
        />
      </div>
      <h4 className='recent-post-card__title'>{title}</h4>
      <a 
        href={linkPath}
        target="_blank"
        className='recent-post-card__link'
       >
          {linkTitle}
      </a>
    </article>
  )
}

export default RecentPostCard
