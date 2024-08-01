import React from 'react'
import Bannerimage from '../../assets/images/banner-bg.jpg'

const Banner = ({bannerheading, subheading}) => {
    const socialmedia =[
        {
            mediatitle: 'Facebook',
            path: 'https://www.facebook.com/',
        },
        {
            mediatitle: 'LinkedIn',
            path: 'https://in.linkedin.com/',
        },
        {        
            mediatitle: 'Instagram',
            path: 'https://www.instagram.com/',
        },
    ];
  return (
    <section className="main-banner">
        <img src={Bannerimage} alt="" />
        <div className="bnr-info">
            <div className="container">
            <div className="bnr-content">
                <h1>{bannerheading}</h1>
                <h2>{subheading}</h2>
            </div>
            </div>
        </div>
        <div className="scrollDown">
            <a href="#TheJourney"><span>Scroll Down</span></a>
        </div>
        <div className="bnr-social">            
            <ul>
                {socialmedia.map((media, index) =>(
                    <li key={index}><a href={media.path} target="_blank" title={media.mediatitle}>{media.mediatitle}</a></li>   
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Banner