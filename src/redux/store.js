import reducer from './reducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../sagas/rootSaga'
import { configureStore } from '@reduxjs/toolkit'

const mySagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mySagaMiddleware)
})

mySagaMiddleware.run(rootSaga)
export default store