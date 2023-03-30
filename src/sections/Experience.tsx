import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'
import history from '../data/history.json'

const career = history.career

export class Experience extends React.Component {
    render() {

        return (
            <Section id="experience" title="Experience">
                <Row>
                    <Col md={12}>
                        <div className="bg-white rounded shadow-dark padding-30 overflow-hidden">
                            {career.map(c => (
                                <div key={c.company} >
                                    <Row>
                                        <h3 className="section-sub">
                                            {c.company}
                                        </h3>
                                        <div className="section-foot">
                                            {c.description}
                                        </div>
                                    </Row>

                                    <div className="timeline edu job-titles overflow-hidden">
                                        {c.titles.map(item => (
                                            <Timeline
                                                key={item.title}
                                                time={item.period}
                                                title={item.title}
                                                icon={[ 'fas', 'briefcase' ]}
                                                left="-7px"
                                            />
                                        ))}

                                        <span className="line"/>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default Experience
