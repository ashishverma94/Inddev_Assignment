import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv' ;
dotenv.config() ;

// BODY PARSER
app.use(express.json({ limit: "50mb" }));
// COOKIE PARSER
app.use(cookieParser());
// CORS [CROSS ORIGIN RESOURCE SHARING]
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// ROUTES
import userRouter from "./routes/user.route.js";
import connectDB from "./utils/db.js";

app.use("/api", userRouter);

// TESTING API
app.get("/test", (req, res, next) => {
  res.status(200).json({ success: true, message: "API is working" });
});
// UNKNOWN ROUTE
app.all("*", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found!`) ;
  err.statusCode = 404;
  next(err);
});

// SERVER 
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  connectDB();
});
