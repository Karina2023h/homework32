import React from "react";
import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Footer } = Layout;
const { Text, Link } = Typography;

const StyledFooter = styled(Footer)`
  background: linear-gradient(135deg, #ff8d00, #ff4e00); /* Градиентный фон */
  padding: 30px;
  text-align: center;
  border-top: 1px solid #ff8d00;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const InfoText = styled(Text)`
  color: #ffffff; /* Изменен цвет текста на белый для контраста */
  font-size: 17px;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #ffffff !important; /* Изменен цвет ссылок на белый */
  font-size: 17px;
  &:hover {
    color: #ffffff !important;
    text-decoration: underline;
  }
`;

const AppFooter = () => {
  return (
    <StyledFooter>
      <InfoContainer>
        <InfoText>М. ПОЛТАВА, УКРАЇНА</InfoText>
        <InfoText>
          <StyledLink href="mailto:REUTENKOKAR@GMAIL.COM">
            reutenkokar@gmail.com
          </StyledLink>
        </InfoText>
        <InfoText>
          Телефон:{" "}
          <StyledLink href="tel:+380950913145">+38 095-09-13-145</StyledLink>
        </InfoText>
        <InfoText>
          <StyledLink
            href="https://github.com/karina2023h"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: https://github.com/karina2023h
          </StyledLink>
        </InfoText>
      </InfoContainer>
    </StyledFooter>
  );
};

export default AppFooter;
