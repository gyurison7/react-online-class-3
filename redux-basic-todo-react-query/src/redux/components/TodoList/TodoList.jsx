import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from "./styles";
import Todo from "../Todo";
import { getTodos } from "../../../api/todos";
import { useQuery } from "react-query";

/**
 * 컴포넌트 개요 : 메인 > TODOLIST. 할 일의 목록을 가지고 있는 컴포넌트
 * 2022.12.16 : 최초 작성
 *
 * @returns TodoList 컴포넌트
 */
function TodoList({ isActive }) {
  // const todos = useSelector((state) => state.todos);

  // useQuery의 결과값을 받아서 data에 넣어준다.
  // useQuery("쿼리의 이름", 조회를 해오는 비동기 함수)
  // useQuery의 결과물은 객체이다.
  const {isLoading, isError, data} = useQuery("todos", getTodos);

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일 ⛱" : "완료한 일 ✅"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {data && data
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

export default TodoList;
