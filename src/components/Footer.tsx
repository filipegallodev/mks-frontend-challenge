import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>MKS sistemas © Todos os direitos reservados</StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 34px;
  background-color: #eee;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
