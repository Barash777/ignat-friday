const initialState = {
    test: 'just string'
}

export type InitialStateType = typeof initialState

export const testReducer = (state: InitialStateType = initialState, action: TestActionsType): InitialStateType => {
    switch (action.type) {
        case 'TEST-ACTION': {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}


export type TestActionsType = TestActionType;

type TestActionType = ReturnType<typeof testAC>
export const testAC = (test: string) => {
    return {
        type: 'TEST-ACTION',
        payload: {
            test
        }
    } as const
}