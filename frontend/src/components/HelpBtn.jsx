import paper from '../assets/paper.svg'
import warranty from '../assets/warranty.svg'
import contact from '../assets/contact.svg'

export default function HelpBtns({ text ="hola", link = '#' }) {
        

    return (
        <a href={link} className="bg-white text-black font-bold py-2 px-4 flex items-center rounded-lg gap-2 hover:bg-gray-200 transition-all duration-200 border-black hover:border-white">
          <img src={
            link === 'paper' ? paper : link === 'warranty' ? warranty : contact
          } alt="SVG" />
          {text}
        </a>
    )
}