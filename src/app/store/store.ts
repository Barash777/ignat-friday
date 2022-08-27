import {combineReducers, legacy_createStore as createStore} from 'redux'
import {registerReducer} from '../reducers/register-reducer';
import {testReducer} from '../reducers/test-reducer';
import {profileReducer} from '../reducers/profile-reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    register: registerReducer,
    test: testReducer
})

const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>

export default store

// @ts-ignore
window.store = store