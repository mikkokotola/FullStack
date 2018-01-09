import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  addPerson = (e) => {
    e.preventDefault()
    if (!this.state.persons.find(element => element.name === this.state.newName)) {
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }

      const persons = this.state.persons.concat(personObject)

      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    } else {
      alert("Nimi on jo puhelinluettelossa.")
    }


  }

  handlePersonChange = (e) => {
    //console.log(e.target.value)
    this.setState({ newName: e.target.value })
  }

  handleNumberChange = (e) => {
    //console.log(e.target.value)
    this.setState({ newNumber: e.target.value })
  }

  handleFilterChange = (e) => {
    //console.log(e.target.value)
    this.setState({ filter: e.target.value })
  }

  render() {
    console.log('render')
    let personsToShow
    
    if (this.state.filter === undefined) {
      personsToShow = this.state.persons
    } else {
      personsToShow = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <form onSubmit={this.addPerson}>
          <div>
            rajaa: <input value={this.state.filter} onChange={this.handleFilterChange} />
          </div>
          <h2>Lisää uusi</h2>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handlePersonChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {personsToShow.map(person => <Person key={person.name} person={person} />)}
          </tbody>
        </table>

      </div>
    )
  }
}

const Person = ({ person }) => {
  return (
    <tr><td>{person.name}</td><td>{person.number}</td></tr>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
