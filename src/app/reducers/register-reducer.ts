const initialState = {}

export type InitialStateType = typeof initialState

export const registerReducer = (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


export type RegisterActionsType = any;
