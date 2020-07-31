import { API_ENDPOINT } from 'utilities/constants';
export const getData = async (id) => await (await fetch(`${API_ENDPOINT}/item/${id}.json`)).json();
