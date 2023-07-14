import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";
import { useEffect } from "react";

const App = () => {

  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });

  // 컴포넌트가 마운트 될 때만 함수 호출
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return <div>
    {
      todos.map((item) => {
        return <div key={item.id}>
          {item.title}
        </div>
      })
    }
  </div>
}

export default App;
