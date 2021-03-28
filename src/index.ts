import express from "express";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument) )

app.use("/users", usersRoutes);

export { app };
