import { useState } from 'react';


const App = () => {

   const [isLogin,setisLogin]=useState(true);

    function change(){
      setisLogin(!isLogin);
    }
  return (
   <>
    <button onClick={change}>{isLogin? "log out" : "log in"}</button>
     <p>{isLogin? "welcome back" : "please login"}</p>
   </>
  )
}
export default App;
