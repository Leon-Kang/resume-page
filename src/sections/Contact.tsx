import React from 'react'
import { Section } from '../components'
import contact from '../data/contact.json'

export class Contact extends React.Component {
    render() {
        return (
            <Section id="contact" title="Get In Touch">
                <div className="contact-info">
                    <h3>{contact.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: contact.subTitle }}/>
                </div>
            </Section>
        )
    }
}

export default Contact
