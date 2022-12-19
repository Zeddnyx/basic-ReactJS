import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { BiCodeAlt } from 'react-icons/bi'
import { Link } from 'react-scroll'

function Nav(){

  const List = props => { 
    return <li className='hover:text-blue-600'>
      <Link to={props.name} smooth={true} duration={600}>{props.list}</Link>
    </li>
  }

  const Resume = () => {
    return <div>
      <button className='font-mono border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-blue-900 py-1 px-7 rounded' type="button">Resume</button>
    </div>
  }

  const [nav, setNav] = useState(false)
  const click = () => setNav(!nav)

return (
    <div className='parent-all-nav'>
      <div className='text-4xl font-bold text-blue-600 cursor-pointer'>
        <Link to='home' smooth={true} duration={600}><BiCodeAlt /></Link>
      </div>

      <ul className='md:flex hidden gap-10 cursor-pointer items-center'>
        <List list='ABOUT'   name='about' />
        <List list='WORKS'   name='works' />
        <List list='CONTACT' name='contact'/>
        <Resume />
      </ul>

      <div onClick={click} className='burger'>
        { !nav ? <FaBars /> : <GrClose /> }
      </div>

      <ul className={!nav ? `hidden` : `nav-mobile`}>
        <List list='ABOUT'   name='about'/>
        <List list='WORKS'   name='works'/>
        <List list='CONTACT' name='contact'/>
        <Resume />
      </ul>
    </div>
  )
}

export default Nav
