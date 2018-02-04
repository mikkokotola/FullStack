//import React from 'react'
//import ReactDOM from 'react-dom'

let newState
const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GOOD':
            const currentGood = state.good
            newState = { ...state, good: currentGood + 1 }
            return newState
        case 'OK':
            const currentOk = state.ok
            newState = { ...state, ok: currentOk + 1 }
            return newState
        case 'BAD':
            const currentBad = state.bad
            newState = { ...state, bad: currentBad + 1 }
            return newState
        case 'ZERO':
            return initialState
    }
    return state
}

export default counterReducer
