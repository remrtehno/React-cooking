import API, {ITEM} from "../constants/constants";

export const getImage = (link: string) => `${API.FREE_PREVIEW}${link}`;
export const getLink = (link: string, category: string) => `${API.HOST}/${ITEM}/${category}/${link}`;
