import { useEffect, useState } from 'react';
import axios from "axios";
import API from "../constants/constants";

const useOferta = () => {
  const [state, setState] = useState('');
  useEffect(() => {
    axios.get(API.WELCOME).then((response) => {
      setState(response.data);
    });
  }, [state]);

  return state;
}

export default useOferta;
