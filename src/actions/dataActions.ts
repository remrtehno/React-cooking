import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import API from "../constants/constants";
import { GET_FOOTER, GET_OFFER, GET_SUBSCRIPTION } from "../types/types";

// eslint-disable-next-line import/prefer-default-export
export const getFooter = () => async (dispatch: Dispatch): Promise<void> => axios
  .get(API.FOOTER)
  .then((res: AxiosResponse<string>) => {
    dispatch({
      type: GET_FOOTER,
      payload: res.data,
    });
  })
  .catch(() => {});

export const getOffer = () => async (dispatch: Dispatch): Promise<void> => axios
  .get(API.OFERTA)
  .then((res: AxiosResponse<string>) => {
    dispatch({
      type: GET_OFFER,
      payload: res.data,
    });
  })
  .catch(() => {});

export const getSubscription = () => async (dispatch: Dispatch): Promise<void> => axios
  .get(API.SUBSCRIPTION_COSTS)
  .then((res: AxiosResponse<string>) => {
    dispatch({
      type: GET_SUBSCRIPTION,
      payload: res.data,
    });
  })
  .catch(() => {});
