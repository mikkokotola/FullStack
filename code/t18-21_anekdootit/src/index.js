import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: []
        }
    }

    upDate = () => {
        return () => {
            this.setState({
                selected: GetRandomInt(0, anecdotes.length - 1)
            })
        }
    }

    vote = (nro) => {
        return () => {
            this.setState({
                votes: this.state.votes.concat(nro)
            })
        }
    }

    countvotes = (numb) => {
        var counts = {};
        const arr = this.state.votes
        for (var i = 0; i < arr.length; i++) {
            var num = arr[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        if (counts[numb] === undefined) {
            return 0;
        }
        return counts[numb]
    }

    
    render() {
        return (
            <div>
                <div>
                    <Anecdote anecdotes={this.props.anecdotes} numb={this.state.selected} countvotes={this.countvotes} />
                    <Button perform={this.vote(this.state.selected)} text='Vote' />
                    <Button perform={this.upDate()} text='Next anecdote' />
                </div>
                <div>
                    <h2>Anecdote with most votes:</h2>
                    <LeadingAnecdote anecdotes={this.props.anecdotes} state={this.state} countvotes={this.countvotes} />
                </div>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const GetRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = (props) => {
    return (
        <button onClick={props.perform}>{props.text}</button>
    )
}

const Anecdote = (props) => {
    return (
        <span>
            <p>{props.anecdotes[props.numb]}</p>
            <p>Has {props.countvotes(props.numb)} votes</p>
        </span>
    )
}

const LeadingAnecdote = (props) => {
    var counts = [0, 0, 0, 0, 0, 0];
    const arr = props.state.votes
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let largestAmount = -1
    let leading
    for (var j = 0; j < counts.length; j++) {
        if (counts[j] > largestAmount) {
            largestAmount = counts[j]
            leading = j
        }
    }

    if (counts[leading] === 0) {
        return <p>No anecdotes voted yet.</p>
    }
    return (<Anecdote anecdotes={props.anecdotes} numb={leading} countvotes={props.countvotes} />)
}


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
