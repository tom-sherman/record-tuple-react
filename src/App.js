import { useEffect, useState } from "react"

export function App() {
  return <>
    <FreezeDetector />
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
  });

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
  return Array.from(list).map((item, index) => {
    expensiveCalculation();
    return <div key={index}>{item}</div>;
  });
}

function expensiveCalculation(){
  let startTime = new Date().getTime();
  while (new Date().getTime() < startTime + 300);
}

function FreezeDetector() {
  const [width, setWidth] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth(Math.abs(Math.sin(Date.now() / 1000)) * 100);
    }, 17);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: 100, backgroundColor: 'red', width: `${width}%` }}>
      <span style={{ position: 'absolute' }}>If this stops, then the page has frozen</span>
    </div>
  );
}
