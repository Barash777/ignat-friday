const initialState = {}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


export type ProfileActionsType = any;
