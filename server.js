import { Elysia } from "elysia";

const app = new Elysia();

const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
};

normalizePort(process.env.PORT || process.env.OTHER_PORT);

export default app;