import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ActiveMode, Container, DarkModeCont, IconBox, SideLink } from './Sidebar.style'
import { AiTwotoneHome } from 'react-icons/ai'
import { BiStore, BiNotepad } from 'react-icons/bi'
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
import { BsSunFill, BsSun } from 'react-icons/bs'
import { changeMode } from '../../../../redux/admin/adminSlice'

const Sidebar = () => {
  const getMode = useSelector(state => state.admin.mode)
  const dispatch = useDispatch()

  return (
    <Container>
      <ul>
        <li><SideLink to='/admin'><AiTwotoneHome />Asosiy</SideLink></li>
        <li><SideLink to='/admin/elonlar'><BiStore />E’lonlar</SideLink></li>
        <li><SideLink to='/admin/faq'><BiNotepad />Savollar</SideLink></li>
      </ul>
      <DarkModeCont>
        <IconBox onClick={() => dispatch(changeMode('light'))}>{getMode === 'light' ? <BsSunFill /> : <BsSun />}</IconBox>
        <IconBox onClick={() => dispatch(changeMode('dark'))}>{getMode === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />}</IconBox>
        <ActiveMode mode={getMode}></ActiveMode>
      </DarkModeCont>
    </Container> 
  )
}

export default Sidebar