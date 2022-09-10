import React from 'react'
import { Header, BackToSite, UserInfoNft, UserInfoImgBox, UserInfo } from './AdminHeader.style'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import avatar from '../../../../assets/images/avatar.png'

const AdminHeader = () => {
  return (
    <Header>
      <BackToSite><AiOutlineUser />Back to Site</BackToSite>
      <UserInfo>
        <UserInfoNft>
          <MdOutlineNotificationsActive />
        </UserInfoNft>
        <UserInfoImgBox>
          <img src={avatar} />
        </UserInfoImgBox>
      </UserInfo>
    </Header>
  )
}

export default AdminHeader