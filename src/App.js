import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent';

import Nav from './Example/Nav';
import HomePage from './Example/HomePage';

import { BrowserRouter,   Switch,  Route,   Link, withRouter } from "react-router-dom";

import ChildComponent from './Example/ChildComponent';
import AddComponent from './Example/AddComponent';

import ListUsers from './Example/Users/ListUsers';
import DetailUsers from './Example/Users/DetailUser';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       
       <Switch>
            <Route path ="/" exact>
							<HomePage/>
						</Route>
						<Route path = "/outputting-list">
							<MyComponent/>
						</Route>
						<Route path = "/contact">
						<ChildComponent/>
						</Route>

            <Route path = '/about'>
              <AddComponent/>
            </Route>

            <Route path = '/users' exact>
              <ListUsers/>
            </Route>

            <Route path = '/users/:id'>
              <DetailUsers/>
            </Route>

					</Switch>

     
      </header> 

      

      {/* <MyComponent/> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick  
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        {/* Same as */}
        <ToastContainer />

    </div>
    </BrowserRouter>
  );
}

export default App; 
