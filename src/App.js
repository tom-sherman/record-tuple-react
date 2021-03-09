import { useEffect, useState } from "react"

export function App() {
  return <>
    <h2>Array:</h2>
    <ArrayBased />
    <h2>Tuple:</h2>
    <TupleBased />
  </>
}

function ArrayBased() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Rerendered ArrayBased')
  })

  return <>
    <div>
      <input value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      <button type="button" onClick={() => setList(inputValue.split(','))}>Split</button>
    </div>
    <List list={list} />
  </>
}

function TupleBased() {
  // Squiggly here is because vscode doesn't understand tuple syntax
  const [list, setList] = useState(#[]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Rerendered TupleBased')
  })

  return <>
    <div>
      <input value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      {/* Alternative syntax for converting from array->tuple: setList(#[...inputValue.split(',')]) */}
      <button type="button" onClick={() => setList(Tuple.from(inputValue.split(',')))}>Split</button>
    </div>
    <List list={list} />
  </>
}

function List({ list }) {
  return Array.from(list).map((item, index) => <div key={index}>{item}</div>)
}
