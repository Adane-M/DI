import React from 'react';
import './App.css';
import Links from './components/Links';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import ErrorBoundary from './components/ErrorBoundary'

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Links />
            <header className="App-header">
                <Routes>
                  <ErrorBoundary >
                  <Route exact path='/' element={<Home />} />
                  </ErrorBoundary>
                  <ErrorBoundary >
                  <Route path='/profile' element={<Profile />} />
                  </ErrorBoundary>
                  <ErrorBoundary >
                  <Route path='/shop' element={<Shop />} />
                  </ErrorBoundary>
                </Routes>
            </header>
          </div>
        </BrowserRouter>
      </div >
    )
  }
}

// import DemoFunctionCompo from './components/DemoFunctionCompo';
// import ClassDemoCompo from './components/ClassDemoCompo';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <DemoFunctionCompo/>
//     <ClassDemoCompo text={`i'm a props in a class  component`} color={'another props with color blue'} name={`im a state methode in a class componente`}/>
//       </header>
//     </div>
//   );
// }

export default App;
