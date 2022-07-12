import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => { 
const [data, setData] = useState([])
useEffect (() => {
  axios.get(url)
.then((response) => {
  setData(response.data.trips);
}).catch((error) => {
  console.log(error)
});
}, [url])
return [data];

}
