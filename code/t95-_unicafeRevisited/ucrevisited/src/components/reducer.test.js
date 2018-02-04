import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
    let state
    let action
    let newState
    const initialState = {
        good: 0,
        ok: 0,
        bad: 0
    }

    beforeEach(() => {
        state = initialState
    })

    it('should return a proper initial state when called with undefined state', () => {
        state = {}
        action = {
            type: 'DO_NOTHING'
        }

        newState = counterReducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    it('good is incremented', () => {
        action = {
            type: 'GOOD'
        }

        deepFreeze(state)
        newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 1,
            ok: 0,
            bad: 0
        })
    })

    it('ok is incremented', () => {
        const action = {
            type: 'OK'
        }
        
        deepFreeze(state)
        newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 0,
            ok: 1,
            bad: 0
        })
    })

    it('bad is incremented', () => {
        const action = {
            type: 'BAD'
        }
        
        deepFreeze(state)
        newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 0,
            ok: 0,
            bad: 1
        })
    })

    it('counter is zeroed', () => {
        const action = {
            type: 'OK'
        }
        const zeroAction = {
            type: 'ZERO'
        }
        
        deepFreeze(state)
        newState = counterReducer(state, action)
        newState = counterReducer(state, action)
        newState = counterReducer(state, zeroAction)
        expect(newState).toEqual({
            good: 0,
            ok: 0,
            bad: 0
        })
    })
})
