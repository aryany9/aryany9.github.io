import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DownArrow from '@mui/icons-material/ArrowDownward'
import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const ArrowDiv = styled.div` 
    /* background-color: black;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 5px; */
    /* Animation */
    height: 100%;
    /* align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center; */
    animation: ${BounceAnimation} 1s linear infinite;
    animation-delay: ${props => props.delay};
`
export default class ScrollDownWidget extends Component {


    render() {
        return (
            <ArrowDiv>
                <DownArrow />
            </ArrowDiv>
        )
    }
}
