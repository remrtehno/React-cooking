export const GET_OFFER = 'GET_OFFER';
export const GET_FOOTER = 'GET_FOOTER';
export const GET_SUBSCRIPTION = 'GET_SUBSCRIPTION';

export interface IDataState {
  footerText: string;
  infoText: string;
  subscription: string;
}

export interface IGetFooter {
  type: typeof GET_FOOTER;
  payload: string;
}

export interface IGetOffer {
  type: typeof GET_OFFER;
  payload: string;
}

export interface IGetSubscription {
  type: typeof GET_SUBSCRIPTION;
  payload: string;
}

export type DataActionTypes = IGetFooter | IGetOffer | IGetSubscription;
