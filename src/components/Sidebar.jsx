import React from 'react'
import '../Sidebar.css';
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import { BookmarkBorderOutlined, HomeRounded, MailOutlined, MoreHorizOutlined, NotificationsNoneOutlined, PeopleOutlineRounded, PermIdentityOutlined, SearchOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        <XIcon className='XIcon'/>
        <SidebarOption active text="Home" Icon={<HomeRounded />} />
        <SidebarOption text="Explore" Icon={<SearchOutlined />}/>
        <SidebarOption text="Notifications" Icon={<NotificationsNoneOutlined />} />
        <SidebarOption text="Chat" Icon={<MailOutlined />} />
        <SidebarOption text="Bookmarks" Icon={<BookmarkBorderOutlined />} />
        <SidebarOption text="Communities" Icon={<PeopleOutlineRounded />} />
        <SidebarOption text="Profile" Icon={<PermIdentityOutlined />} />
        <SidebarOption text="More" Icon={<MoreHorizOutlined />} />
        <Button variant='outlined' className='tweet-button'>Post</Button>
    </div>
  )
}

export default Sidebar