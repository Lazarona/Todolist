import { useState } from "react";

import "./App.css";

function App() {
  const [newtask, SetNewtask] = useState("");
  //Permet de modifier la variable  newTask, est donc appellé SetNewTask

  const [taskList, SetTaskList] = useState([]);

  const addTask = () => {
    SetTaskList([...taskList, newtask]);
    console.log("liste ", taskList);
  };
  //recupérer le tableau
  const ajout = (e) => {
    SetNewtask(e.target.value);
    console.log("ajout", newtask);
    //ici les données sont stokées
  };

  const viewlist = () => {
    return taskList.map((item, index) => {
      return (
        <div key={index}>
          <li>{item}</li>
        </div>
      );
    });
  };
  //Stoker newtask

  //this.task = this.taskList;
  //this.List = this.list;

  //function taskList

  const onClear = () => {
    SetNewtask("");
  };

  return (
    <>
      <p>Qu'est ce qu'il te manque?</p>
      <input SetNewtask={SetNewtask} onChange={ajout}></input>
      <button onClick={addTask}>Valider</button>
      <li>Ta liste:{viewlist()}</li>
      {/*On rapelle ici */}
    </>
  );
}

export default App;
