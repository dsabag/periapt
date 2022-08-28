import express from "express";
import path from "path";
import { router } from "./router/router.js";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(3000, () => console.log("listening on port 3000."));
