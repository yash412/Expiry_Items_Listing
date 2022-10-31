import React ,{useState} from 'react' ;
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom' ;
const Register = () => {
    const navigate = useNavigate() ;
    const [inputs , setInputs ] = useState({
        name:"",
        email:"",
        password:""
    }) ;
    const handleChange = (e) => {
        setInputs({
            ...inputs , [e.target.name] : e.target.value
        })
    }
    const sendRequest = () => {
        axios.post('http://localhost:8000/api/user/register',{name:inputs.name,email:inputs.email,password:inputs.password})
        .then(()=>navigate("/login")) ;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest() ;
    }   
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter name" onChange={handleChange} name="name"
            value={inputs.name} required/><br/><br/>
            <input type="text" placeholder="enter email" onChange={handleChange} name="email"
            value={inputs.email}  required/><br/><br/>
            <input type="text" placeholder="enter password" onChange={handleChange} name="password"
            value={inputs.password} required/><br/><br/>
            <button type="submit" disabled={
               inputs.name && inputs.email && inputs.password.length > 5 ? false :true
            }>Submit</button>
        </form>
    </div>
  )
}

export default Register ;