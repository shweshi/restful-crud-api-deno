import { Application } from "https://deno.land/x/oak/mod.ts";
// routes
import userRouter from "./routes/user.ts";

const app = new Application();
const port: number = 8000;

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

console.log('server is running on port ', port);
await app.listen({ port });