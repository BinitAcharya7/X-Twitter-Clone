import React from 'react'
import '../SidebarOption.css'

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        {Icon}
        <div className='sidebarText'>{text}</div>
    </div>
  )
}

export default SidebarOption