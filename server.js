import express from "express";
import bookRouter from "./routes/bookRoutes.js";
import errorMiddleware from "./middleware/errorHandler.js";
import connecttoDB from "./config/db.js";
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/v1/books", bookRouter);

app.use(errorMiddleware);

const startServer = async () => {
  try {
    await connecttoDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to DB. Server not started.", err);
    process.exit(1);
  }
};

startServer();
