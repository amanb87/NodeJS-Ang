import axios from 'axios' ;  //  $  npm install axios

axios.get("https://jsonplaceholder.typicode.com/posts/3")
  .then(data => console.log(data))
  .catch(json => console.log("error", json));