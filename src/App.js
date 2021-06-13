import React, { useState } from 'react';
import './App.css';
import ShowList from './showList';

const App = () => {
  const nameList = [
    { name: "vandana", salary: '3200' },
    { name: "yogesh", salary: '4400' },
    { name: "varsha", salary: '5200' },
  ];

  const [selected, setSelected] = useState({})

  const selectChangeHandler = (event) => {
    let fname = event.target.value;
    let sal = 0;
    for (let n of nameList) {
      if (fname === n.name) {
        sal = n.salary;
      }
    }
    setSelected({
      name: event.target.value,
      salary: sal
    })
  }
  const refreshHandler = () => {
    setSelected({
      name: '',
      salary: ''
    })
  }

  return (
    <div >
      <select onChange={selectChangeHandler}  >
        <option value="" selected disabled hidden> Choose here </option>
        <option value={nameList[0].name}> {nameList[0].name} </option>
        <option value={nameList[1].name}> {nameList[1].name} </option>
        <option value={nameList[2].name}> {nameList[2].name} </option>
      </select>

      <div>
        <span> name : {selected.name} </span><br />
        <span> salary : {selected.salary} </span>
      </div>
      <button onClick={refreshHandler}> REFRESH</button>
    </div>
  )

}

export default App;
