import "dotenv/config";
import express, { Express } from "express";
import { api, web } from "./routes";

const app: Express = express();
const port = process.env.PORT || 8000;

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/", web);
app.use("/api", api);

app.listen(port, () => console.log(`Server is running on port ${port}`));
