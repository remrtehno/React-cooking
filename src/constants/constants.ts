const HOST = process.env.PUBLIC_URL;
export const CATEGORY = 'category';
export const ITEM = 'content';
export const MAIN_CATEGORY = 'salati';
// potok http://advertkey.com/lp/pre/flow/ksua_cook    --- boe
const API = {
  HOST,
  FOOTER: `${HOST}/text/cook-ua-ks/footer/1`,
  OFERTA: `${HOST}/text/cook-ua-ks/oferta/1`,
  WELCOME: `${HOST}/text/cook-ua-ks/welcome/1`,
  SUBSCRIPTION_COSTS: `${HOST}/text/cook-ua-ks/subscriptioncosts/1`,
  CATEGORIES: `${HOST}/api/compact-auto?lang=ua`,
  FREE_PREVIEW: `${HOST}/gate/f/`,
  CONTENT: `${HOST}/gate/p/`,
  BACK_URL: 'http://smotri.club/ero/default/landing/lp/flow/ksua_naf/?source=service',
};

export const ROUTE_PATHS = {
  PAGE404: `${HOST}/`,
  ERROR: `${HOST}/error`,
  SUBSCRIPTION_COSTS: `${HOST}/user/subscription-costs/`,
  OFERTA: `${HOST}/user/offer/`,
  CATEGORY: `${HOST}/${CATEGORY}/:alias`,
  CATEGORY_ITEM_DETAIL: `${HOST}/${ITEM}/:alias/:content/:id`,
  WELCOME: `${HOST}/welcome`,
}

export default API;
