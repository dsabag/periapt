import axios from "axios";
import { DBinstance } from "../db/RamDB.js";

export const getWikiSummary = async (req, res, next) => {
  let lang = req.lang;
  const token = req?.token;

  if (token) {
    const user = DBinstance.get(token);
    lang = user?.language || "en";
  }
  try {
    const { articleName } = req.params;
    const { data } = await axios.get(
      `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${articleName}`
    );

    return res.status(200).send({
      scrapeDate: Date.now(),
      articleName: data?.title,
      introduction: data?.extract,
    });
  } catch (error) {
    return res.status(404).send("the requested page was not found");
  }
};
