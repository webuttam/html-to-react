import React from 'react'
import Footerlogo from '../../assets/images/site-logo.png'

const Footer = () => {
    const FTmenu = [
        {
            title:'Home',
            path: '/',
        },
        {
            title:'Science is God',
            path: '/',
        },
        {
            title:'History',
            path: '/',
        },
        {
            title:'Spiritual Blogs',
            path: '/',
        },
        {
            title:'ULC Case Law',
            path: '/',
        },
        {
            title:'Campaigns',
            path: '/',
        },
    ];
  return (
    <footer className="site-footer">
        <div className="container">
            <div className="footer-inner">
                <div className="ft-logo">
                    <a href="#" title="George Freeman"><img src={Footerlogo} alt="" /></a>
                </div>
                <div className="ft-menu">
                    <ul>
                        {FTmenu.map((option, index)=>(
                            <li key={index}><a href="#">{option.title}</a></li>
                        ))}                    
                    </ul>
                </div>
                <div className="ft-social">
                    <ul>
                        <li><a href="#" title="Facebook" target="_blank"><i className="icon-facebook"></i></a></li>
                        <li><a href="#" title="LinkedIn" target="_blank"><i className="icon-linkedin"></i></a></li>
                        <li><a href="#" title="Instagram" target="_blank"><i className="icon-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="ft-copyright"><p>©2024 <a href="#">George Freeman</a>. All Rights Reserved.</p></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer