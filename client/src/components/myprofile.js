import React , {useContext,useState , useEffect } from 'react' ;
import { useNavigate } from 'react-router-dom' ;
import { store } from '../App';
import axios from 'axios';

const Myprofile = () => {
    const navigate = useNavigate() ;
    const [token,setToken] = useContext(store) ;
    const [data,setData] = useState(null) ;
    useEffect(() => {
        if(!localStorage.getItem('user')){
            navigate("/login") ;
        }
        // axios.get('http://localhost:8000/api/user/myprofile',{
        //      headers:{
        //         'x-token':token
        //      }
        // }).then(res => setData(res.data)).catch(err => console.log(err)) ;
    },[localStorage.getItem('user')]) ;
    // if(!token){
    //     navigate('/login') ;
    // }
    const handleClick = () => {
        localStorage.removeItem('user') ;
        navigate("/login") ;
    }
  return (
    <div>
        Hello
        {/* {
            data && <h1> Myprofile - { data.name }</h1>
        } */}
        <br/>
        <button onClick={handleClick}><h1>
            Logout
            </h1></button>
    </div>
  )
}

export default Myprofile ;