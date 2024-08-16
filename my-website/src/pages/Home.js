import React from "react";
import styled from "styled-components";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

// Стилизованный контейнер
const Container = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #fdfbfb, #f8f8f8, #ffe0b2, #fff7e6);
  display: flex;
  justify-content: center;
`;

// Стилизованная карточка
const StyledCard = styled(Card)`
  background: linear-gradient(135deg, #fdfbfb, #f8f8f8, #ffe0b2, #fff7e6);
  border: 1px solid #ff4e00; /* Оранжевая граница */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

// Стилизованные заголовки и параграфы
const StyledTitle = styled(Title)`
  color: #ff7f00; /* Оранжевый цвет заголовков */
  margin: 0;
  text-align: center;
`;

const CenteredTitleContainer = styled.div`
  text-align: center;
  margin: auto;
  padding: 10px;
  border: 1px solid #131212;
  border-radius: 8px;
  width: 35%;
  margin-bottom: 90px;
  margin-top: 20px;
  height: 145px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  color: #000;
  margin: 0;
  font-family: sans-serif;
  margin-top: 25px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled(StyledTitle)`
  text-align: left;
  font-size: 18px;
`;

const List = styled.ul`
  padding-left: 20px;
  font-size: 18px;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Columns = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 20px;
  margin-top: 60px;
  border: 1px solid #010101;
  border-radius: 20px;
  margin-bottom: 60px;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Home = () => {
  return (
    <Container>
      <StyledCard>
        <CenteredTitleContainer>
          <StyledTitle level={1} style={{ marginBottom: "-25px" }}>
            Реутенко Каріна
          </StyledTitle>
          <StyledTitle level={1}>ПРОГРАМІСТ</StyledTitle>
        </CenteredTitleContainer>

        <StyledTitle level={1}>Профіль</StyledTitle>
        <StyledParagraph>
          Я — фронтенд-розробник з глибокими знаннями мов програмування. Маю
          значний досвід створення веб-сайтів на замовлення, від односторінкових
          лендінгів до повнофункціональних інтернет-магазинів. Володію навичками
          проектування сучасних, привабливих та зручних у використанні
          веб-сайтів, орієнтуючись на потреби клієнтів та користувачів. Шукаю
          можливість приєднатися до амбітної команди, щоб застосувати свої
          знання та розширити професійний досвід.
        </StyledParagraph>

        <Columns>
          <Column>
            <Section>
              <SectionTitle level={3}>Освіта</SectionTitle>
              <List>
                <li>
                  Диплом бакалавра, Туризм, ПНПУ імені В. Г. Короленка, 2021 р.
                </li>
                <li>Сертифікат FRONTEND DEVELOPER course at GoIT, 2023 р.</li>
              </List>
            </Section>
          </Column>

          <Column>
            <Section>
              <SectionTitle level={3}>Навички</SectionTitle>
              <List>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>NODE.JS/NEXT.JS</li>
                <li>GIT, BOOTSTRAP/JQUERY</li>
              </List>
            </Section>
          </Column>

          <Column>
            <Section>
              <SectionTitle level={3}>Вміння</SectionTitle>
              <List>
                <li>Створення та підтримка веб-сайтів</li>
                <li>Frontend розробка</li>
                <li>Адаптивний дизайн</li>
                <li>Креативність та вирішення прорблем</li>
                <li>Комунікативні навички</li>
              </List>
            </Section>
          </Column>
        </Columns>

        <StyledTitle level={1}>Досвід</StyledTitle>
        <Section>
          <SectionTitle level={3}>FRONTEND РОЗРОБНИК</SectionTitle>
          <List>
            <li>
              Розробка інтернет-магазину: Створила повнофункціональний
              інтернет-магазин, що призвело до збільшення замовлень на 50%
              протягом першого кварталу.
            </li>
            <li>
              Односторінковий сайт для стартапу: Розробила сучасний та
              адаптивний односторінковий сайт для стартапу, який допоміг
              залучити клієнтів.
            </li>
            <li>
              Використання нових технологій: Впровадила нові фреймворки та
              бібліотеки, такі як React та Bootstrap/jQuery, що дозволило
              підвищити продуктивність.
            </li>
            <li>
              Здійснювала та підтримувала постійну комунікацію з клієнтами та
              замовниками.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle level={3}>ДОДАТКОВА ІНФОРМАЦІЯ</SectionTitle>
          <List>
            <li>
              Мови: Вільно володію українською, російською мовами. Рівень
              англійської мови В1.
            </li>
            <li>
              Хобі та інтереси: [Спорт, малювання, кулінарія. Також вивчаю нові
              мови програмування та удосконалюю англійську мову.]
            </li>
          </List>
        </Section>
      </StyledCard>
    </Container>
  );
};

export default Home;
