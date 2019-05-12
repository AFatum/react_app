import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './system/rootReducer';
// специальный компонент Provider связывает хранилище redux с react
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';


/* функция createStore создает само redux-хранилище.
В эту функцию нам нужно передать главный reducer.
Вторым параметрам мы передаем результат исполнения функции composeWithDevTools, для дебага в дополнении хрома */
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
