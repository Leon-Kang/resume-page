import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import about from '../data/about.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer({
    marginTop: '110px'
})

export class Footer extends React.Component {
    render() {
        return (
            <StyledFooter className="footer">
                <Container>
                    <span className="copyright">© {(new Date()).getFullYear()}
                        {about.username}
                        {':  '}
                        <FontAwesomeIcon icon={[ 'fas', 'envelope' ]} />
                        <a className="mail" href="mailto:me@leonkang.com">  me@leonkang.com</a>
                    </span>
                </Container>
            </StyledFooter>
        )
    }
}

export default Footer
