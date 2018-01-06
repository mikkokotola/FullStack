import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    increment = (arvo, vanhaArvo) => {
        if (arvo === 1) {
            return () => {
                this.setState({
                    hyva: vanhaArvo + 1
                })
            }
        } else if (arvo === 2) {
            return () => {
                this.setState({
                    neutraali: vanhaArvo + 1
                })
            }
        } else if (arvo === 3) {
            return () => {
                this.setState({
                    huono: vanhaArvo + 1
                })
            }
        }


    }

    render() {
        // let lkm = this.state.hyva + this.state.neutraali + this.state.huono
        return (
            <div>
                <h1>UC-palaute</h1>
                <h2>Anna palautetta</h2>
                <div>
                    <Button perform={this.increment(1, this.state.hyva)} text='Hyvä' />
                    <Button perform={this.increment(2, this.state.neutraali)} text='Neutraali' />
                    <Button perform={this.increment(3, this.state.huono)} text='Huono' />
                </div>
                <h2>Statistiikka</h2>
                <Statistics state={this.state} />

            </div>
        )
    }
}

const Statistics = (props) => {
    const lkm = props.state.hyva + props.state.neutraali + props.state.huono
    if (lkm > 0) {
        return (
            <table>
                <tbody>
                    <Statistic text="Hyviä" value={props.state.hyva} />
                    <Statistic text="Neutraaleja" value={props.state.neutraali} />
                    <Statistic text="Huonoja" value={props.state.huono} />
                    <Statistic text="Keskiarvo" value={(props.state.hyva - props.state.huono) / lkm} />
                    <Statistic text="Positiivisia" value={Math.floor((props.state.hyva / lkm) * 100)} postfix=" %" />
                </tbody>
            </table>
        )
    } else {
        return (<p>Yhtään palautetta ei ole annettu.</p>)
    }

}

const Statistic = (props) => {
    return (
        <tr><td>{props.text}:</td><td>{props.value}{props.postfix}</td></tr>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.perform}>{props.text}</button>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

