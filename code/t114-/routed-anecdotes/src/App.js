import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom'
import { Navbar, Nav, NavItem, Alert, ListGroup, ListGroupItem, Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import axios from 'axios'


const SingleAnecdote = ({ anecdote }) => (
  <div>
    <h2>{anecdote.content}</h2>
    <p>has {anecdote.votes} votes</p>
    <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
  </div>
)

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ListGroup>
      {anecdotes.map(anecdote => <ListGroupItem key={anecdote.id} > <Link to={`/anecdotes/${anecdote.id}`} >{anecdote.content}</Link></ListGroupItem>)}
    </ListGroup>
  </div>
)

const About = () => {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto'
  }
  return (
    <div>
      <h2>About anecdote app</h2>
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6} lg={6}>

            <p>According to Wikipedia:</p>

            <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

            <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img style={imgStyle} id='Dijkstra' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Edsger_Wybe_Dijkstra.jpg' />
          </Col>
        </Row>
      </Grid>
    </div>)
}

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
  </div>
)

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    this.props.history.push('/')
    this.props.setNotification(`A new anecdote created: ${this.state.content}`)
    //setTimeout(this.props.setNotification(''), 5000)
    setTimeout(() => {
      this.props.setNotification('')
    }, 10000)
  }

  render() {
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>content</ControlLabel>
            <FormControl name='content' value={this.state.content} onChange={this.handleChange} />
            <ControlLabel>author</ControlLabel>
            <FormControl name='author' value={this.state.author} onChange={this.handleChange} />
            <ControlLabel>url for more info</ControlLabel>
            <FormControl name='info' value={this.state.info} onChange={this.handleChange} />

            <Button bsStyle='success' type='submit'>create</Button>
          </FormGroup>
        </form>
      </div>
    )

  }
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    }
  }

  setNotification = (message) => {
    this.setState({ notification: message })
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ anecdotes: this.state.anecdotes.concat(anecdote) })
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  Software anecdotes
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem href='#'>
                    <Link to="/">Anecdotes</Link>
                  </NavItem>
                  <NavItem href='#'>
                    <Link to="/create">Create new</Link>
                  </NavItem>
                  <NavItem href='#'>
                    <Link to="/about">About</Link>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Notification state={this.state} />
            <Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />
            <Route path="/create" render={({ history }) => <CreateNew addNew={this.addNew} history={history} setNotification={this.setNotification} />} />
            <Route path="/about" render={() => <About />} />
            <Route exact path="/anecdotes/:id" render={({ match }) =>
              <SingleAnecdote anecdote={this.anecdoteById(match.params.id)} />}
            />

          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

const Notification = ({ state }) => {
  const notificationStyle = {
    color: 'white',
    fontSize: 14,
    padding: 10,
    border: 'solid',
    backgroundColor: 'green',
    borderRadius: 10

  }
  if (state.notification === '') {
    return (<div></div>)
  } else {
    return (
      state.notification &&
      <Alert color="success">
        {state.notification}
      </Alert>
    )
  }
}

export default App
