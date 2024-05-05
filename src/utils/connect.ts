import config from "config";
import mongoose from "mongoose";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  return await mongoose
    .connect(dbUri, {})
    .then(() => logger.info("Connected to DB"))
    .catch((e) => {
      logger.error(e);
      process.exit(1);
    });
}

export default connect;
