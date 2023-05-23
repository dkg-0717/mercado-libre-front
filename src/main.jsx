import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import AppRouter from './router/AppRouter';

import { BrowserRouter } from 'react-router-dom';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
