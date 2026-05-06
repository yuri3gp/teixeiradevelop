import React from 'react'
import { StyledFooter, StyledLink } from './styles'

export default function Footer()
{
        const currentYear = new Date().getFullYear();

    return(
        <>
            <StyledFooter>
                            <p>Teixeira Develop | CNPJ 50.313.157/0001-45</p>
                            <p>
                                <StyledLink href="mailto:yuri3gp@gmail.com">yuri3gp@gmail.com</StyledLink>
                                {' | '}
                                <StyledLink href="tel:+553197300623">(31) 9730-0623</StyledLink>
                                {' | '}
                                <StyledLink href="https://wa.me/55319973006233" target="_blank" rel="noreferrer">WhatsApp</StyledLink>
                            </p>
                            <small>{currentYear} Todos os direitos reservados.</small>
            </StyledFooter>
        </>
    )
}