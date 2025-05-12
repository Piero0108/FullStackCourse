import { useState, useEffect } from 'react'
import axios from 'axios'

const Phonebook = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input onChange={props.handleName} />
          {'  '}
          number: <input onChange={props.handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Numbers = (props) => {
  const persons = props.person
  return (
    <ul>
        {persons.map(person => 
          <li key={person.name}>
            {person.name}
            {' '}
            {person.number}
          </li>
        )}
      </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const name = persons.map(person => person.name)

    if (name.includes(personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook handleName={handleNameChange} handleNumber={handleNumberChange} onSubmit={addName} />
      <h2>Numbers</h2>
      <Numbers person={persons} />
    </div>
  )
}

export default App