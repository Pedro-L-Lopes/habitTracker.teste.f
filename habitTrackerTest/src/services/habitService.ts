import axios from "axios";
import { api, requestConfig } from "../lib/config";

const getSummary = async () => {
  const config = requestConfig("GET", null);

  try {
    const res = await axios(api + "summary", config)
      .then((res) => res.data)
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const postHabit = async (data: any) => {
  const config = requestConfig("POST", data);

  try {
    const res = await axios(api + "", config)
      .then((res) => res.data)
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllHabits = async () => {
  const config = requestConfig("GET", null);

  try {
    const res = await axios(api + "allHabits", config)
      .then((res) => res.data)
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const habitService = {
  getSummary,
  postHabit,
  getAllHabits,
};

export default habitService;
