import { langTypes } from "../utils/langSupport.js";

const whitelistRegex = /^[a-zA-Z0-9-_]+$/;

export const isValidTerm = (req, res, next) => {
  const userInput = req?.params?.articleName;

  if (whitelistRegex.test(userInput)) {
    next();
  } else {
    return res
      .status(400)
      .send(
        "you may only use alphanumeric characters, hyphens and underscores"
      );
  }
};

export const isValidLang = (req, res, next) => {
  const header = req?.header("accept-language");

  const parsedLang = header?.split("-")[0] || header || "en";

  if (!langTypes.hasOwnProperty(parsedLang)) {
    return res.status(400).send("invalid language");
  }
  req.lang = parsedLang;

  next();
};
