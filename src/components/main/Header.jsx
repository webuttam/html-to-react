import React , {useState} from 'react'
import Headerlogo from '../../assets/images/site-logo.png'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'


const Header = () => {  
  const [Mainmenu, setMainMenu] = useState(false)
  return (
    <>
    <header className="site-header">
      <div className="container">
        <div className="d-flex">
          <div className="hdr-menu hdr-menu-left">
            <ul>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Home</NavLink></li>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Science is God</NavLink></li>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>History</NavLink></li>
            </ul>
          </div>
          <div className="hdr-logo">
            <a href="#" title="George Freeman"><img src={Headerlogo} alt="George Freeman" /></a>
          </div>
          <div className="hdr-menu hdr-menu-right">
            <ul>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Spiritual Blogs</NavLink></li>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>ULC Case Law</NavLink></li>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Campaigns</NavLink></li>
              <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/contact-us'>Contact Us</NavLink></li>
            </ul>
            <div className='mobile-menu'>
              <MenuIcon onClick={()=> setMainMenu(true)} />
              <Drawer open={Mainmenu} onClose={()=> setMainMenu(false)} anchor='right'>
                <Box sx={{width:250}} onClick={() => setMainMenu(false)}>
                  <ul>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Home</NavLink></li>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Science is God</NavLink></li>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>History</NavLink></li>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Spiritual Blogs</NavLink></li>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>ULC Case Law</NavLink></li>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/'>Campaigns</NavLink></li>
                    <li><NavLink className={(e) => {return e.isActive?"menu-active": ""}} to='/contact-us'>Contact Us</NavLink></li>
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