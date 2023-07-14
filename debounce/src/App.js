import _ from "lodash";
import { useCallback, useState } from "react";

function App() {
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSearchText = useCallback(
    _.debounce((text) => {
      setSearchText(text);
    }, 2000),
    []
  );

  // 공통 함수
  const handelChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  }

  return (
    <div style={{
      paddingLeft: "20px",
      paddingRight: "20px",
    }}>
      <h1>디바운싱 예제</h1>
      <input placeholder="입력값을 넣고 디바운싱 테스트를 해보세요."
        style={{ width: "300px" }}
        type="text"
        onChange={handelChange} />
      <p>Search Text : {searchText}</p>
      <p>Input Text : {inputText}</p>
    </div>
  );
}

export default App;
