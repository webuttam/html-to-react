import React from 'react'
import Timelineimg1 from '../../assets/images/timeline-img1.jpg'
import Timelineimg2 from '../../assets/images/timeline-img2.jpg'
import Timelineimg3 from '../../assets/images/timeline-img3.jpg'
import Timelineimg4 from '../../assets/images/timeline-img4.jpg'
import Timelineimg5 from '../../assets/images/timeline-img5.jpg'
import Timelineimg6 from '../../assets/images/timeline-img6.jpg'
import Timelineimg7 from '../../assets/images/timeline-img7.jpg'

const Journey = () => {
    const Timeline=[
        {
            image:Timelineimg1,
            title: 'Six Saints Orchestra',
            desc: 'As a teenager, George was the drummer with the Six Saints Orchestra. After several gigs and a few minor television appearances, George was hired to drum at the storied Spokane restaurant Virgil’s Chicken Shack.',
        },
        {
            image:Timelineimg2,
            title: 'Military Service',
            desc: 'George joined the Washington State National Guard at 16, continuing after graduation with the US Army for several years through a military career that took him around the country and the world.',
        },
        {
            image:Timelineimg3,
            title: 'Galaxy 21',
            desc: 'After moving to New York City, George worked as a salesman with a plastics company. This eventually led him to a job at the radio station WOR, for what began as a sales call to sell the station plastic bags for promotional totes quickly turned into an interview for the station’s sales department.',
        },
        {
            image:Timelineimg4,
            title: 'The Monastery is Born',
            desc: 'George quickly worked to transform the space into The Monastery, an after-hours private club which harkened back to his nights as a drummer at Spokane’s Harlem Club and Virgil’s Chicken Dinner Inn.',
        },
        {
            image:Timelineimg5,
            title: 'End of an Era',
            desc: 'Prosecutors filed civil misdemeanor charges against George for failure to have a $5 banquet permit (which he applied for numerous times but was continuously denied by the State).',
        },
        {
            image:Timelineimg6,
            title: 'Eden Seattle SoDo',
            desc: 'EdenSeattle SoDo was a 9,000 sq. ft. full-service event venue, occupying a former engine factory originally built in 1916. Located just two blocks south of Safeco Field, Eden featured an elegant, lush interior and a cosmic ambiance befitting Seattle’s modern, eclectic vibe.',
        },
        {
            image:Timelineimg7,
            title: 'The Rectory',
            desc: 'Driving on I-5 north to the Ship Canal Bridge in the dark of night, chances are that you have seen a glass and steel structure.Lit up with bright lights as statuesque astronauts stand guard in the windows, it certainly has a space-age flare. Inside lies an equally adorned, cozy interior.',
        },
    ];
    
  return (
    <section className="the-journey" id="TheJourney">
        <div className="container">
            <div className="heading text-center" data-animation="fadeInUp">
                <h2 className="section-heading">The Journey</h2>
                <p>George Freeman has music in his soul. He credits his love of song, dance, and the human connection they make possible to his mother, Selma. A hotel maid and single mother, Selma encouraged her children to seek joy in music.</p>
            </div>
            <div className="journey-timeline">
                <ul>
                    {
                        Timeline.map((Options, index) =>(
                            <li key={index} className="timeline-box">
                                <div className="d-flex" data-animation="fadeInLeft">
                                    <div className="media-body">
                                        <h4>{Options.title}</h4>
                                        <p>{Options.desc}</p>
                                    </div>
                                    <div className="media-img">
                                        <img src={Options.image} alt="" />
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className='clearfix'></div>
            </div>
        </div>
    </section>
  )
}

export default Journey