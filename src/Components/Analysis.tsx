'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const Analysis =()=>{
    const data = [
        {
          name: 'Next JS',
          projects: 75
        },
        {
            name: 'React JS',
            projects: 80
        },
        {
          name: 'WordPress',
          projects: 70
        },
        {
          name: 'Webflow',
          projects: 90
        },
        {
          name: 'HTML',
          projects: 95
        },
        {
          name: 'Photography',
          projects: 78
        },
      ];

    return (
        <>
            <Container>
                <h3 className="title">Technology Used</h3>
                <Row>
                    <Col>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={300} height={300} data={data}>
                                <XAxis dataKey="name"/>
                                <Tooltip />
                                <Bar dataKey="projects" fill="#dc4a38" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className="text-justify details">To build Web Application I use Next js Framework. React JS is used for cross platform mobile application. I use MySQL database
                            for relational database system. To build NoSQL application i use MongoDB. Firebase database system
                            is used where it is necessary to provide realtime data flow facilities.
                        </p>
                        
                        <p className="text-justify details"> I always build dynamic application. Admin panel is the heart of such
                            kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                            According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                        </p>

                        <p className="text-justify details">Application security is a big deal for commercial application. I always
                            ensure security portion of my application, moreover i build a security alert system, to notify admin when
                            his system at risk.
                        </p>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Analysis;