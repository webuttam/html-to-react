import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel/dist/owl.carousel.js'
import BlogImage1 from '../../assets/images/sermons_teachings-img1.jpg'
import BlogImage2 from '../../assets/images/sermons_teachings-img2.jpg'
import BlogImage3 from '../../assets/images/sermons_teachings-img3.jpg'

const Latestblogs = () => {
    const BlogsList =[
        {
            date: 'JANUARY 19, 2024',
            author: 'GEORGE FREEMAN HISTORY',
            title: 'Tea Time With Rev. George Freeman of the Universal Life Church',
            image: BlogImage1,
            shortdesc: 'I recently sat down for an interview with Andrew Davey at Haymarket Weddings. Read the full interview below or on their website: Rev. George Freeman may be the spiritual leader of the most influential church that you may not know that you know about.'
        },
        {
            date: 'March 25, 2024',
            author: 'GEORGE FREEMAN HISTORY',
            title: 'Let’s Light SoDo Up!',
            image: BlogImage2,
            shortdesc: 'Former mayor Charley Royer and Seattle Building and Construction Trade Council Executive Secretary Monty Anderson recently emphasized the importance of...'
        },
        {
            date: 'July 15, 2024',
            author: 'GEORGE FREEMAN HISTORY',
            title: 'Francis, the Liberal Pope',
            image: BlogImage3,
            shortdesc: 'Last month, the Vatican made headlines after Pope Francis approved blessings for same-sex couples. It was a decision that marked a very public departure from the...'
        },
    ];
  return (
    <section className="sermons_teachings">
        <div className="container">
            <div className="heading text-center" data-animation="fadeInUp"><h2 className="section-heading">Sermons & Teachings</h2></div>
            <OwlCarousel className="owl-theme" loop items={2} autoplay>
                {BlogsList.map((Blog, index) => (
                    <div key={index} className="sermons_teachings-left">
                        <div className="sermons_teachings-leftBox">
                            <div className="meta-box">
                                <ul>
                                    <li>{Blog.date}</li>
                                    <li><a href="#">{Blog.author}</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">{Blog.title}</a></h2>
                            <div className="sermons_teachings-leftBox-img">
                                <a href="#"><img src={Blog.image} alt="" /></a>
                            </div>
                            <div className="sermons_teachings-leftBox-info">
                                <p>{Blog.shortdesc}</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
                
            </OwlCarousel>
        </div>
    </section>

  )
}

export default Latestblogs