import React, { useState } from 'react'
import Headerlogo from '../../assets/images/site-logo.png'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'


const Header = () => {
  const [Mainmenu, setMainMenu] = useState(false)
  const LeftMenulist = [
    {
      title:"Home",
      path: "/"
    },
    {
      title: "Science is God",
      path: "/"
    },
    {
      title: "History",
      path: "/"
    },
  ];
  const RightMenulist = [
    {
      title:"Spiritual Blogs",
      path: "/"
    },
    {
      title: "ULC Case Law",
      path: "/"
    },
    {
      title: "Campaigns",
      path: "/"
    },
    {
      title: "Contact Us",
      path: "/"
    },
  ];
  const MobileMenu = [
    {
      title:"Home",
      path: "/"
    },
    {
      title: "Science is God",
      path: "/"
    },
    {
      title: "History",
      path: "/"
    },
    {
      title:"Spiritual Blogs",
      path: "/"
    },
    {
      title: "ULC Case Law",
      path: "/"
    },
    {
      title: "Campaigns",
      path: "/"
    },
    {
      title: "Contact Us",
      path: "/contact"
    },
  ];
  return (
    <>
    <header className="site-header">
      <div className="container">
        <div className="d-flex">
          <div className="hdr-menu hdr-menu-left">
            <ul>
              {LeftMenulist.map((option, index) =>(
                  <li key={index}><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to={option.path}>{option.title}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className="hdr-logo">
            <a href="#" title="George Freeman"><img src={Headerlogo} alt="George Freeman" /></a>
          </div>
          <div className="hdr-menu hdr-menu-right">
            <ul>
              {RightMenulist.map((Rightmenu, index2)=>(
                <li key={index2}><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to={Rightmenu.path}>{Rightmenu.title}</NavLink></li>
              ))} 
            </ul>
            <div className='mobile-menu'>
              <MenuIcon onClick={()=> setMainMenu(true)} />
              <Drawer open={Mainmenu} onClose={()=> setMainMenu(false)} anchor='right'>
                <Box sx={{width:250}} onClick={() => setMainMenu(false)}>
                  <ul>
                    {MobileMenu.map((mobileMenu, mobileKey)=>(
                      <li key={mobileKey}><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to={mobileMenu.path}>{mobileMenu.title}</NavLink></li>
                    ))} 
                  </ul>
                </Box>
              </Drawer>
            </div>
          </div>
          

        </div>
      </div>
    </header>
    </>
  )
}

export default Header