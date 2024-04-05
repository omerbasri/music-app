import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

   export default function Login() {

    const[username,usernameUpdate] = useState('');
    const[password,passwordUpdate] = useState('');

    let navigate=useNavigate()

    useEffect(() => {
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => {console.log(error)}) 
        }, []);
 
    const proceedLogin= (e) => {
        e.preventDefault();
        if(validate())
        {
           goHomePage();
        }
    }
    const validate=()=>{
        let result=true;
        if(username ==='' || username===null)
        {
            result=false;
            alert("Please enter username");
        }
        if(password ==='' || password==null)
        {
            result=false;
            alert("Please enter password");
        }
        return result;
    }

    function goHomePage()
    {
        navigate('/home');
    }
        
    return (
          <div>
            <form action="">
                <h1>Login</h1>
                <div>
                    <input type="text" value={username} onChange={e=>usernameUpdate(e.target.value)} placeholder="Username" className="text-black" required/>
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={e=>passwordUpdate(e.target.value)} className="text-black" required/>        
                </div>
                <button type='submit' onClick={proceedLogin}>Login</button>
            </form>        
          </div>
        );
      };
      

 