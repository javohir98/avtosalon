import React from 'react'
import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs'

const NavContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 40px;
`;

const Button = styled.button`
  padding: 12px 20px;
  height: 48px;
  background-color: #2A85FF;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
      margin-right: 10px;
      font-size: 20px;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-right: 6px;
  color: #000;

  svg {
    margin-left: 6px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='container'>
      <NavContainer>
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