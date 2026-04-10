import express from "express"
import AdminLogin from "../controllers/AdminController.js"; 

const adminRouter = express.Router();
adminRouter.post("/login", AdminLogin);

export default adminRouter;