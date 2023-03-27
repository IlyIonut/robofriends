import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import { searchRobots,requestRobots} from './reducers';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = configureStore(
  {reducer:rootReducer,middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware,logger)})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App  />
      </Provider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
