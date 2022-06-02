import React, {useState} from 'react'
import './App.css';

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  function addTodo() {
    setTodo([...todo,text])
    setText('')
  }
<br/>
  const [mop, setMop] = useState('')
  const [dod, setDod] = useState ([])
  function addTodo () {
    setDod([...dod,mop])
    setMop('')
  }
  return (
    <div className="App">
      <div>
        <input  
        
         type="text"
         value={text}
         placeholder='тодону кошуу'
         onChange={e => setText(e.target.value)}
         />
         <button onClick={addTodo}>издоо</button  >
         <ol>
           {todo.map(item => (
             <li>
               {item}
             </li>
           ))}
         </ol>
      </div>
<br/>
      <div>
        <input
        type="text"
        value={text}
        placeholder= 'тодону кош !'
        onChange={e => setMop(e.target.value)}
        />
        <button onClick={addTodo}>коруу</button  >
        <ol>
          {dod.map(tiim => (
            <li>
              {tiim}
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}

export default App;
