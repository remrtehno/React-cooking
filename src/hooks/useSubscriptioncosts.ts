import {useEffect, useState} from 'react';
import axios from "axios";
import API from "../constants/constants";

const useSubscriptioncots = () => {
  const [state, setState] = useState('');
  useEffect(() => {
    axios.get(API.SUBSCRIPTION_COSTS).then((response) => {
      setState(response.data);
    });
  }, [state]);

  return state;
}

export default useSubscriptioncots;
