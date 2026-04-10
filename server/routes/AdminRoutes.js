import express from "express"
import { AdminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments,  getDashboard } from "../controllers/AdminController.js";
import auth from "../Middleware/auth.js"
const adminRouter = express.Router();
adminRouter.post("/login", AdminLogin);
adminRouter.get("/comments",auth, getAllComments);
adminRouter.get("/blogs",auth, getAllBlogsAdmin);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentById);
adminRouter.post("/dashborad", auth, getDashboard);


export default adminRouter;