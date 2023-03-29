import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollTopArrow = () => {

    const [ showScroll, setShowScroll ] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true)
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div id="return-to-top" style={{ display: showScroll ? 'block' : 'none' }} onClick={scrollTop}>
            <FontAwesomeIcon icon={[ 'fas', 'arrow-up' ]} style={{ paddingLeft: 2 }}/>
        </div>
    )
}

export default ScrollTopArrow
