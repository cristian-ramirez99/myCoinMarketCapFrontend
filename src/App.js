import './App.css';
import Footer from './shared/footer/footer';
import Header from './shared/header/header';
import Dashboard from './pages/dashboard/dashboard';
import { Route } from "wouter";


function App() {
  return (
    <div id='page-container'>
      <div id='content-wrap'>
        <Header></Header>
        <Route path='/' component={Dashboard}></Route>
      </div>
      <Footer id='footer'></Footer>
    </div>
  );
}
export default App;
