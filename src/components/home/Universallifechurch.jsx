import React, { useState } from 'react'
import VideoThumb from '../../assets/images/church-video1.jpg'
import VideoThumb2 from '../../assets/images/church-video2.jpg'
import ReactPlayer from 'react-player'

const Universallifechurch = () => {
    const Videolist =[
        {
            modalid: 'modal1',
            image: VideoThumb,
            videolink: 'https://www.youtube.com/watch?v=9sekgEXGm-E'
        },
        {
            modalid: 'modal2',
            image: VideoThumb2,
            videolink: 'https://youtu.be/9xwazD5SyVg'
        },
    ];
    const [isModal, setIsModal] = useState(false)
    const OpenModal =() =>{
        setIsModal(true);
    }
    const CloseModal =()=>{
        setIsModal(false);
    }

  return (
    <section className="universal-church">
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-xl-5 col-lg-5 col-sm-6 universal-church-left">
                    <div className="universal-church-left-content">
                        <div className="heading">
                            <h2 className="section-heading">Universal<br/> Life Church</h2>
                            <p>45 years ago, George Freeman's spirit met the liberty of the Universal Life Church Monastery. Today as the Founder and Presiding Chaplain of the largest Universal Life Church, George Freeman oversees the ULC's worldwide operations at its headquarters in Seattle, Washington.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-sm-6 universal-church-right">
                    <div className="d-flex">
                        {Videolist.map((Video, index)=>(
                            <div key={index} className="video-box">
                                <div className="video-box-inr">
                                    <img src={Video.image} alt="" />
                                    <div className="video-btn"><a onClick={OpenModal}><i className="icon-play"></i></a></div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
        {isModal && (
            <div className='modal'>
                <div className='modal-content'>
                    <span className='modal-close' onClick={CloseModal}>&times;</span>
                    <div className='modal-body'>
                            <ReactPlayer url={Video.videolink} />
                    </div>
                </div>
            </div>
        )}
        <div className="container-fluid">
            <div className="universal-church-btm-content">
                <p>Following the original vision of the church's founder, Rev. Kirby Hensley, Freeman took charge of the church and ended the malfeasance the federal government uncovered during Hensley's tenure. Under Freeman's leadership, the Universal Life Church implemented crucial reforms and removed bad actors, upholding its commitment to spiritual growth and equality.</p>
                <p>Thanks to Rev. Freeman's dedication, the church has become a beacon of hope for those seeking spiritual growth and equality. With over 20 million ministers ordained online to date, the ULC remains steadfast in its advocacy for marriage equality and fair treatment under the law.</p>
                <a href="#" className="theme-btn"><span>ULCMonastery.org</span></a>
            </div>
        </div>
    </section>
    
  )
}

export default Universallifechurch