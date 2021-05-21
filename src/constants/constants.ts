const HOST = process.env.PUBLIC_URL;
export const CATEGORY = 'category';
export const ITEM = 'content';

const API = {
  HOST,
  FOOTER: `${HOST}/text/ua-ks-naked-and-funny/footer/1`,
  OFFER: `${HOST}/text/ua-ks-naked-and-funny/oferta/1`,
  CATEGORIES: `${HOST}/api/compact-auto?lang=ua`,
  FREE_PREVIEW: '/gate/f/',
  CONTENT: '/gate/p/',
  BACK_URL: 'http://smotri.club/ero/default/landing/lp/flow/ksua_naf/?source=service',
};

export const ROUTE_PATHS = {
  PAGE404: `${HOST}/404`,
  ERROR: `${HOST}/error`,
  SUBSCRIPTION_COSTS: `${HOST}/user/subscription-costs/`,
  CONDITIONS: `${HOST}/user/offer/`,
  CATEGORY: `${HOST}/${CATEGORY}/:alias`,
  CATEGORY_ITEM_DETAIL: `${HOST}/${ITEM}/:alias/:content/:id`,
  WELCOME: `${HOST}/welcome`,
}

export default API;
