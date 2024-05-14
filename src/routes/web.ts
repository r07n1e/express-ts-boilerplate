import { Router } from "express";

export const web: Router = Router();

web.get("/helloworld", (req, res) => {
  res.send(`
          <h1>Hello World</h1>
    `);
});
