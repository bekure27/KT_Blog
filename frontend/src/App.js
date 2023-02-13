import './App.css';
import Header from './Header';
import Post from './Post';
import {Routes,Route} from "react-router-dom";
import Layout from './Layout';
import IndexPages from './pages/IndexPages';
import LoginPages from './pages/LoginPages';
import SignUp from './pages/SignUp';

function App() {
  return (

<Routes>
<Route  path = "/" element = {<Layout />}>
      <Route index element ={<IndexPages />}/>
      <Route path = {'/login'} element = {<LoginPages/>}/>
      <Route path = {'/signup'} element = {<SignUp/>}/>
</Route>

</Routes>
);
}

export default App;
