import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
// controller
import userController from "../controllers/user.ts";

router
  .get("/users", userController.get)
  .post("/users", userController.create)
  .put("/users/:id", userController.update)
  .delete("/users/:id", userController.delete);

export default router;