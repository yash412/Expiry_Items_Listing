import React , {useState , useContext } from 'react' ;
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom' ;
import { store } from '../App';

const Login = () => {
    const navigate = useNavigate() ;
    // const [token,setToken] = useContext(store) ;
    const [inputs , setInputs ] = useState({
        email:"",
        password:""
    }) ;
    const handleChange = (e) => {
        setInputs({
            ...inputs , [e.target.name] : e.target.value
        })
    }
    const sendRequest = () => {
        axios.post('http://localhost:8000/api/user/login',{email:inputs.email,password:inputs.password})
        .then(res => localStorage.setItem('user',res.data)) ;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest() ;
       if(localStorage.getItem('user')){
          navigate('/myprofile') ;
       }
        // if(token){
        //     navigate('/myprofile') ;
        // }
    }   
    
  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder="enter email" onChange={handleChange} name="email"
        value={inputs.email}  required/><br/><br/>
        <input type="text" placeholder="enter password" onChange={handleChange} name="password"
        value={inputs.password} required/><br/><br/>
        <button type="submit" disabled={
            inputs.email && inputs.password.length > 5 ? false :true
        }>Submit</button>
    </form>
</div>
  )
}

export default Login ;