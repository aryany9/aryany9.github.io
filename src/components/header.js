import styled from 'styled-components';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const HeaderStyle = styled.header`
    background-color: #FFFFFF;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.1); /* increase the vertical offset to 6px */
  padding: 20px;
  height: 15%;
  align-items: center;
  align-content: center;
  color: red;
  text-align: center;
`

export const Header = () => {
    return <HeaderStyle>
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            <Button variant="outlined" color="primary" sx={{ border: "1px solid black", color: "black"}}>About Me</Button>
            <Button variant="outlined">Projects</Button>
            <Button variant="outlined">Contact</Button>
            <Button variant="outlined">Social</Button>
        </Stack>
    </HeaderStyle>
};