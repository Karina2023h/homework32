import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Select, Input, Button, Spin, Alert, List } from "antd";
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2, #ff9a9e, #ff6a00);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  border: 1px solid #ff4e00;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin-top: 30px;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 10px;
  height: 40px;
`;

// Стилизованный Input
const StyledInput = styled(Input)`
  width: 100%;
  max-width: 500px;
  height: 40px;
  margin-bottom: 10px;
`;

const PrimaryButton = styled(Button)`
  background-color: #ff7f00 !important;
  color: white !important;
  border: none !important;
  width: 100% !important;
  max-width: 170px !important;
  height: 40px !important;
  &:hover {
    background-color: #ff8f00 !important;
  }
`;

const ClearButton = styled(Button)`
  background-color: #e4090c !important;
  color: white !important;
  border: none !important;
  width: 100% !important;
  max-width: 170px !important;
  height: 40px !important;
  margin-top: 10px !important;
  &:hover {
    background-color: #d50032 !important;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Swapi = () => {
  const [type, setType] = useState("people");
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    const id = url.match(new RegExp(`${type}/(\\d+)/`))?.[1];
    if (!id) {
      setError("Введіть коректне посилання SWAPI.");
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`https://swapi.dev/api/${type}/${id}/`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Помилка при отриманні данних.");
        setLoading(false);
      });
  };

  const clearData = () => {
    setData(null);
    setUrl("");
    setError(null);
  };

  return (
    <Container>
      <Title
        level={1}
        style={{ marginBottom: "20px", color: "#ff7f00", fontSize: "45px" }}
      >
        SWAPI
      </Title>
      <MainContent>
        <SearchContainer>
          <StyledSelect value={type} onChange={(value) => setType(value)}>
            <Option value="people">People</Option>
            <Option value="planets">Planets</Option>
            <Option value="starships">Starships</Option>
            <Option value="vehicles">Vehicles</Option>
            <Option value="species">Species</Option>
          </StyledSelect>
          <StyledInput
            placeholder="Введіть ID або URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <PrimaryButton type="primary" onClick={handleSearch}>
            Отримати
          </PrimaryButton>
          <ClearButton onClick={clearData}>Очистити</ClearButton>
        </SearchContainer>

        {loading && (
          <Spin
            size="large"
            style={{ display: "block", margin: "20px auto" }}
          />
        )}
        {error && <Alert message={error} type="error" showIcon />}
        {data && (
          <List
            bordered
            dataSource={Object.keys(data)}
            renderItem={(key) => (
              <List.Item>
                <strong>{key.replace("_", " ")}:</strong>{" "}
                {Array.isArray(data[key]) ? data[key].join(", ") : data[key]}
              </List.Item>
            )}
          />
        )}
      </MainContent>
      <Footer>
        {/* Кнопка очистки теперь находится внутри SearchContainer */}
      </Footer>
    </Container>
  );
};

export default Swapi;
