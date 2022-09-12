import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs'
import { Button, Li, NavContainer, Ul } from './Navbar.style'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='container'>
      <NavContainer >
        <Ul>
          <Li>Bosh sahifa <BsChevronRight /></Li>
          <Li>modellar</Li>
        </Ul>
        <Button onClick={() => navigate('/admin')}><AiOutlineUser />Admin o'tish</Button>
      </NavContainer>
    </div>
  )
}

export default Navbar