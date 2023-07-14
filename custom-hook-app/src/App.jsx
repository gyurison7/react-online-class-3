import useInput from "./hooks/useInput";

function App() {

  const [name, onChangeNameHandler] = useInput('');
  const [pw, onChangePwhandler] = useInput('');

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler}/>
      <input type="password" value={pw} onChange={onChangePwhandler}/>
    </div>
  );
}

export default App;
