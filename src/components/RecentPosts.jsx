
import RecentPostCard from './RecentPostCard';

function RecentPosts() {
  const list = [
    {
      id: 0,
      title: 'Celebrating Pantone\'s Color of the Year',
      imgSrc: "http://placekitten.com/350/200",
      linkTitle: 'Visual Trends',
      linkPath: 'https://google.com',
    },
    {
      id: 1,
      title: 'Title 20 Top Designers and Illustrators',
      imgSrc: "https://www.fillmurray.com/350/200",
      linkTitle: 'Spotlight',
      linkPath: 'https://www.youtube.com/',
    },
    {
      id: 2,
      title: 'Ami Vitale',
      imgSrc: "https://loremflickr.com/350/200",
      linkTitle: 'Photographer Spotlight',
      linkPath: 'https://www.facebook.com/',
    },
  ]


  return (
    <section className='recent-posts'>
      <h2 className='recent-posts__title'>Recent Posts</h2>
      
      <div className='recent-posts__list'>
      {list.map(item => (
        <RecentPostCard 
          key={item.id}
          title={item.title}
          imgSrc={item.imgSrc}
          linkTitle={item.linkTitle}
          linkPath={item.linkPath}
        />
      ))}
      </div>
    </section>
  )
}

export default RecentPosts