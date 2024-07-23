import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js";
import connectDB from "./config/db.js";
import bookRouter from "./routers/bookRouter.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000/api",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-type"],
//   })
// );

// routers
app.use("/api", bookRouter);

//DB Connection
connectDB();

app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
