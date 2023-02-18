import thendraConfig, { githubKey } from "../../../thendra.config";
import axios from 'axios'; 
  
 export default async function User(req, res) { 
     try { 
         const config = { 
             headers: { 
                 Authorization: "token"
             }   
         }; 
          
         let { data: ReposThendra } = await axios.get(`https://api.github.com/users/thendra-s/repos`); 
          
         res.send([...ReposThendra]) 
     } catch(err) { 
         res.status(500).json({ error: 'Something went wrong!' }); 
     } 
 };