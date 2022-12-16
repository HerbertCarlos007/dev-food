import React from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { LinkArea, LinkIcon } from './styled'

export default ({ icon, link }) => {

    const history = useHistory()
    const location = useLocation()

    let isAtive = location.pathname == link

    const handleLinkClick = (e) => {
        e.preventDefault()
        history.push(link)
    }

    return (
        <LinkArea active={isAtive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />

        </LinkArea>
    );
}