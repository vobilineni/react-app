import React from 'react';
import Person from "./Person";

function NameList() {
  const  names = [ 'sri', 'srini', 'srinivas'];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return(<div>{nameList}</div>)

  /*const persons = [
    {id: 1, name: 'sri', skill: 'react'},
    {id: 2, name: 'srini', skill: 'angular'},
    {id: 3, name: 'srinivas', skill: 'vue'}
  ];
  const personList = persons.map(person => <Person key={person.id} person={person}/>);
  return <div>{personList}</div>*/
}

export default NameList;