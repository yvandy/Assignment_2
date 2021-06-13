import React, { useState } from 'react';

const ShowList = () => {
    const nameList = [
        { name: "vandana", salary: '3200' },
        { name: "yogesh", salary: '4400' },
        { name: "varsha", salary: '5200' },
        { name: "komal", salary: '3000' },
        { name: "rita", salary: '1000' },
        { name: "reena", salary: '3000' },
    ];
    const [names, setNames] = useState(nameList);
    const [currName, setCurrName] = useState('');
    const [sal, setSal] = useState()

    const selectHandler = (event) => {
        setCurrName(event.target.value);
        salaryHandler(event.target.value)
    }
    const salaryHandler = (name) => {
        let ans = names.filter(item => item.name === name)
        setSal(ans[0].salary);
    }
    const refreshHandler = () => {
        setCurrName('');
        setSal('');
    }

    return (
        <div style={{ textAlign: "center" }}>
            <select value={currName} onChange={selectHandler} >
                <option value="choose" > Choose here </option>
                {
                    names.map((item) => {
                        return <option value={item.name}>  {item.name} </option>
                    })
                }
            </select>
            <br />
            Name : {currName}
            <br />
            Salary : {sal}
            <br />
            <button onClick={refreshHandler}> REFRESH</button>
        </div>
    )
}

export default ShowList;