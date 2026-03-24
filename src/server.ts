import app from "./app";
import { sequelize } from "./config/database";

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();
