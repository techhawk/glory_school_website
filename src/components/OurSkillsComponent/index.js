import React, { useState } from 'react'

import Lecture1 from '../../assets/images/lecture/lecture-1.jpg'
import Lecture2 from '../../assets/images/lecture/lecture-2.jpg'
import Lecture3 from '../../assets/images/lecture/lecture-3.jpg'
import Lecture4 from '../../assets/images/lecture/lecture-4.jpg'

import Instagram from '../../assets/images/svg/social/instagram.svg'
import Facebook from '../../assets/images/svg/social/facebook.svg'
import Whatsapp from '../../assets/images/svg/social/whatsapp.svg'
import Twitter from '../../assets/images/svg/social/twitter.svg'
import Linkedin from '../../assets/images/svg/social/linkedin.svg'
import { Col, Row } from 'react-bootstrap'



const OurSkillsComponent = () => {



    const [ourSkillLecture, setOurSkillLecture] = useState([
        {
            image: require('../../assets/images/lecture/lecture-1.jpg'),
            name: 'Rosy janner',
            type: 'Senior Finanace Lecture',
        },
        {
            image: require('../../assets/images/lecture/lecture-2.jpg'),
            name: 'Mike Hussy',
            type: 'Senior Finanace Lecture',
        },
        {
            image: require('../../assets/images/lecture/lecture-3.jpg'),
            name: 'Daziy Millar',
            type: 'Senior Finanace Lecture',
        },
        {
            image: require('../../assets/images/lecture/lecture-4.jpg'),
            name: 'Kazi Fahmi',
            type: 'Senior Finanace Lecture',
        },
    ])

    return (
        <div>


            <div className="our-skill-lecture mt-5">
                <div className="topic-lecture ">
                    <h1 className='fw-bold'>Our Skilled Lecturers</h1>
                </div>

                <Row>
                    {
                        ourSkillLecture.map((value) => {
                            return (
                                <>

                                    <Col md={6} lg={6} xl={3}>
                                        <div className="our-lecture-card mt-4">
                                            <div className="lecture-image mt-3">
                                                <img src={value.image} alt="" />
                                            </div>
                                            <div className="lecture-info">
                                                <h2>{value.name}</h2>
                                                <p>{value.type}</p>
                                            </div>
                                            <div className="lecture-soical-contact mb-5 ">
                                                <img src={Instagram} alt="" />
                                                <img src={Facebook} alt="" />
                                                <img src={Twitter} alt="" />
                                                <img src={Whatsapp} alt="" />
                                                <img src={Linkedin} alt="" />
                                            </div>
                                        </div>
                                    </Col>

                                </>
                            )
                        })
                    }

                </Row>
            </div>
        </div>
    )
}

export default OurSkillsComponent
