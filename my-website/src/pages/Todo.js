import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, List, Modal } from "antd";

const { confirm } = Modal;

// Стилизованный контейнер
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 90vh;
  background: linear-gradient(135deg, #f2eded, #a4d6ee, #8f949d, #d5195e);
  background-size: 400% 300%;
  animation: gradient 10s ease infinite;
  border: 1px solid #ff4e00;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  margin-top: 30px;
`;

// Стилизованный заголовок
const Title = styled.h1`
  color: #ff7f00;
  margin-bottom: 20px;
  font-size: 45px;
  margin-top: 40px;
  font-family: "Arial", sans-serif;
`;

// Контейнер для ввода и кнопки
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin-bottom: 20px;
`;

// Стилизованный Input
const StyledInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
  height: 50px;
  border: 1px solid;
  font-size: 16px;
`;

// Стилизованная кнопка добавления
const AddButton = styled(Button)`
  background-color: #ff7f00;
  color: white;
  width: 140px;
  height: 50px;
  font-size: 17px;
  border: none;
  &:hover {
    background-color: #ff8c00 !important;
  }
`;

// Стилизованная кнопка удаления и изменения
const ActionButton = styled(Button)`
  margin-left: 10px;
  border: none;
  color: white;
  font-size: 16px;
  &:hover {
    color: white !important;
  }

  ${(props) =>
    props.type === "edit" &&
    `
    background-color: #e66f15; /* Оранжевый цвет для кнопки редактирования */
    &:hover {
      background-color: #ff8c00 !important; /* Темный оранжевый при наведении */
    }
  `}

  ${(props) =>
    props.type === "delete" &&
    `
    background-color: #ff0003; /* Красный цвет для кнопки удаления */
    &:hover {
      background-color: #c8102e !important; /* Более темный красный при наведении */
    }
  `}
`;

// Стилизованный элемент списка
const StyledList = styled(List)`
  width: 100%;
  max-width: 700px;
  border: none;
  padding: 0;
  margin-top: 20px;
`;

// Стилизованный элемент списка
const ListItem = styled(List.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 15px;
  font-size: 18px;
`;

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    confirm({
      title: "Ви впевнені, що хочете видалити цю задачу?",
      onOk: () => {
        setTasks(tasks.filter((_, i) => i !== index));
      },
    });
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const handleSaveEdit = () => {
    if (editValue) {
      const updatedTasks = tasks.map((item, index) =>
        index === editIndex ? editValue : item
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditValue("");
    }
  };

  return (
    <Container>
      <Title>TODO</Title>
      <InputContainer>
        <StyledInput
          placeholder="Нова задача"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <AddButton type="primary" onClick={handleAddTask}>
          Додати
        </AddButton>
      </InputContainer>
      <StyledList
        bordered
        dataSource={tasks}
        renderItem={(item, index) => (
          <ListItem
            actions={[
              <ActionButton
                key="edit"
                type="edit"
                onClick={() => handleEditTask(index)}
              >
                Змінити
              </ActionButton>,
              <ActionButton
                key="delete"
                type="delete"
                onClick={() => handleDeleteTask(index)}
              >
                Видалити
              </ActionButton>,
            ]}
          >
            {editIndex === index ? (
              <Input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleSaveEdit}
                onPressEnter={handleSaveEdit}
              />
            ) : (
              item
            )}
          </ListItem>
        )}
      />
    </Container>
  );
};

export default Todo;
