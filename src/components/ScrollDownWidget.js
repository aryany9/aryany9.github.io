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
    /* Animation */
    height: 100%;
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
