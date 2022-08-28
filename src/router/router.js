import { Router } from "express";
import { hasToken } from "../middlewares/hasToken.js";
import { getWikiSummary } from "../controllers/wikiController.js";
import { isValidTerm, isValidLang } from "../middlewares/whitelist.js";
import { createUser } from "../controllers/userController.js";

const router = Router();

/* Routes */

router.get(
  "/introduction/:articleName",
  hasToken,
  isValidTerm,
  isValidLang,
  getWikiSummary
);
router.post("/user", isValidLang, createUser);

export { router };
