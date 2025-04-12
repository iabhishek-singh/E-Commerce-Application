import Header from './components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './utils/store';

function App() {


  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <h2 className="buttonForGitLink text-center"><a href="https://github.com/iabhishek-singh/E-Commerce-Application.git">GitHub</a></h2>
      </Provider>
    </>

  )
}

export default App
