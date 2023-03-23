
import './App.css';
import {useState,useEffect} from 'react'
import UserListe from './component/UserListe';

import axios from 'axios'
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  const [user, setUser] = useState(null)
  const[isLogin, setIsLogin]=useState(true)
  
  const getData=async()=>{
    try {
        const res= await  axios.get("https://jsonplaceholder.typicode.com/users")
        setUser(res.data)
        setIsLogin(false)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
getData()
}, [])

  return (
    <div className="App">
         <Header/>
    <UserListe data={user} isLogin={isLogin}/>
 
    <Footer/>

    </div>
  );
}

export default App;
