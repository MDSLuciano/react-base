// Aqui iremos combinar vários reducers em um só para não precisar ficar
// criando sempre.

import { combineReducers } from 'redux'

import exampleReducer from './example/reducer'

export default combineReducers({
  example: exampleReducer,
})
