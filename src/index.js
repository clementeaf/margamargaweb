import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';

ReactDOM.render(
      <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
          </StateProvider>
      </BrowserRouter>,
  document.getElementById('root')
);
