import { Icon, CardHeader, Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: gray;
    position: sticky;
    top: 0;
    z-index: 10;
`

const Division = styled.container`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 5;
    flex-direction: column;
    align-items: center;
`


export default function Navbar() {
    return (
        <Header>
            <Division>
                
            </Division>
        </Header>
    );

}