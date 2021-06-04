import {
  DataActionTypes, GET_FOOTER, GET_OFFER, GET_SUBSCRIPTION, IDataState,
} from '../types/types';

const initialState: IDataState = {
  footerText: '',
  infoText: '',
  subscription: '',
};

export default (state = initialState, action: DataActionTypes): IDataState => {
  switch (action.type) {
    case GET_FOOTER:
      return {
        ...state,
        footerText: action.payload,
      };
    case GET_OFFER:
      return {
        ...state,
        infoText: action.payload,
      };
    case GET_SUBSCRIPTION:
      return {
        ...state,
        subscription: action.payload,
      };
    default:
      return state;
  }
};
