import TechSpecCard from "./TechSpecCard"
import {FaDollarSign, FaDesktop, FaPlug} from 'react-icons/fa'

function TechSpecs() {

  const list = [
    {
      id: 0,
      linkPath: 'https://thenounproject.com/pricing/',
      icon: <FaDollarSign />,
      title: 'Pricing & Licenses',
      description: 'All images available as free downloads. Purchase a royalty-free license to support artists and get more options.',
      noSvg: true,
    },
    {
      id: 1,
      linkPath: 'https://thenounproject.com/apps/',
      icon: <FaDesktop />,
      title: 'Apps & Plugins',
      description: 'Drag and drop icons into the software you use. Access vector, png, & pdf from Mac, PowerPoint, Adobe, Google, more.',
      hasSvg: true,
    },
    {
      id: 2,
      linkPath: 'https://thenounproject.com/developers/',
      icon: <FaPlug />,
      title: 'API',
      description: 'Access the entire icon collection via our REST API. Reliably supports growth stage to enterprise clients. ',
      noSvg: true,
    },
  ]



  return (
    <section className='tech-specs'>      
      <div className='tech-specs__list'>
      {list.map(item => (
        <TechSpecCard
          key={item.id}
          linkPath={item.linkPath}
          icon={item.icon}
          title={item.title}
          description={item.description}
          hasSvg={item.hasSvg}
          noSvg={item.noSvg}
        />
      ))}
      </div>
    </section>
  )
}

export default TechSpecs