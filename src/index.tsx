import { Provider } from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
