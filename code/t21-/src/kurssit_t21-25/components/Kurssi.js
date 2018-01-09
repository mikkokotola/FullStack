import React from 'react'

const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi.nimi} />
            <Sisalto osat={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <h2>Sisältö</h2>
            <ul>
                {props.osat.map(part => <Osa key={part.id} osa={part} />)}
            </ul>
        </div>
    )
}

const Yhteensa = (props) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return (
        <p>yhteensä {Array.from(props.osat, x => x.tehtavia).reduce(reducer)} tehtävää</p>
    )
}

const Osa = (props) => {
    return (
        <li>{props.osa.nimi} {props.osa.tehtavia}</li>
    )
}

export default Kurssi