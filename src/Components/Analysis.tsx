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
                        <p className="text-justify details">When crafting web applications, I typically rely on Next.js as my go-to framework, appreciated for its versatility and efficiency. Its seamless integration of React and Node.js ensures smooth development and excellent performance. However, every client comes with unique demands and preferences, and I'm always ready to adapt to their specific needs.</p>
                        <p className="text-justify details">In crafting captivating graphic designs, I employ the precision of Adobe Illustrator, a dynamic tool tailored for vector graphics. With its versatile array of features, I seamlessly sculpt intricate vectors, ensuring each line and curve is meticulously honed to perfection.</p>
                        <p className="text-justify details">Working in SEO involves a delicate dance between strategy and tools, a harmonious blend of digital finesse and technical prowess. As I delved into the world of SEO ranking, I found myself navigating through a labyrinth of algorithms and keywords, seeking to elevate websites to the pinnacle of search engine results pages.</p>
                        <p className="text-justify details">When tasked with meeting client demands for stock photography, I rely on my trusty DSLR camera, the Canon 250D, to capture every detail with stunning clarity. Paired with my masterful lens, the Canon 18-135mm IS STM lens, I ensure that each shot is imbued with the perfect balance of precision and creativity.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Analysis;