import axios from "axios";

const url = "http://localhost:5000";

export const getCards = () => axios.get(url+"/tinder/cards");