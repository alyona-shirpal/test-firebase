import './App.css';
import SignIn from './components/SignIn';
import {useEffect, useState} from "react";
import {auth} from "./firebase";
import Home from "./components/Home";

function App() {
    const [user,setUser] = useState(null)
    useEffect(() => {
        return auth.onAuthStateChanged(userAuth => {
            const user = {
            uid: userAuth?.uid,
            email: userAuth?.email
        }
            if (userAuth) {
              setUser(user);
                console.log(userAuth)
            } else {
                setUser(null);
            }
        })

    }, [])
  return (
    <div className="App">
        {user ? <Home/>: <SignIn/>}
    </div>
  );
}

export default App;
