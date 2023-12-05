import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.h2`
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 700;
  color:${props => props.theme.tertiary};
  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
  &:before{
    content:"";
    background: ${props => props.theme.accent};
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 5px;
    transform: translate(0,-150%);
    
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
