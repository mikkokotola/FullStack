import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  /* addPerson = (e) => {
    e.preventDefault()
    if (!this.state.countries.find(element => element.name === this.state.newName)) {
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }

      const persons = this.state.countries.concat(personObject)

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
   */

  handleFilterChange = (e) => {
    console.log(e.target.value)
    this.setState({ filter: e.target.value })
  }

  setFilter = (newValue) => {
    return () => {
      console.log(`filter to be set to ${newValue}`)
      this.setState({ filter: newValue })
    }
  }

  render() {
    console.log('render')
    let countriesToShow

    if (this.state.filter === undefined) {
      countriesToShow = this.state.countries
    } else {
      countriesToShow = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    return (
      <div>
        <h1>Country list / EU</h1>

        <div>
          Find countries: <input value={this.state.filter} onChange={this.handleFilterChange} />
        </div>

        <h2>Countries</h2>
        {<Countries key={countriesToShow.toString} countries={countriesToShow} setFilter={this.setFilter.bind} />}

      </div>
    )
  }
}

const Countries = ({ countries, setFilter }) => {
  
  if (countries.length > 10) {
    
    return (
      <p>Too many matches (over 10), give a more specific filter</p>
      
    )
  } else if (countries.length === 1) {
    return (
      <div>

        {< CountryPage country={countries[0]} />}

      </div>
    )

  }
  /* function countryCallback(country, setFilter) {
    return <Country key={country.numericCode} country={country} setFilter={setFilter} />
  }; */
  
  return (
   
   <table>
      <tbody>
        {/* {countries.map(countryCallback.bind(null, setFilter))} */}
        {countries.map(country => <Country key={country.numericCode} country={country} setFilter={setFilter} />)}
      </tbody>
    </table>

  )

}

const Country = ({ country, setFilter }) => {
  return (
    <tr><td>{country.name}</td><td>{country.numericCode}</td></tr>
  )
}

const CountryPage = ({ country }) => {
  let countryFlagString = "Flag of ".concat(country.name)
  return (
    <div>
      <p>Capital: {country.name}</p>
      <p>Population: {country.population}</p>
      <img src={country.flag} height="200" width="300"></img>
    </div>

  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
