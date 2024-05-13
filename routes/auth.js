import express from "express";
import { validateBody } from "../helpers/validateBody.js";
import {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  verificationSchema,
} from "../models/users.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserSubscription,
  updateAvatar,
  verifyEmail,
  verifyEmailRequest,
} from "../controllers/authControllers.js";
import { auth } from "../helpers/auth.js";
import { upload } from "../helpers/upload.js";

export const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(registerSchema),
  ctrlWrapper(registerUser)
);
authRouter.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));
authRouter.post(
  "/verify",
  validateBody(verificationSchema),
  ctrlWrapper(verifyEmailRequest)
);
authRouter.post("/login", validateBody(loginSchema), ctrlWrapper(loginUser));
authRouter.post("/logout", auth, ctrlWrapper(logoutUser));
authRouter.get("/current", auth, ctrlWrapper(getCurrentUser));
authRouter.patch(
  "/",
  auth,
  validateBody(updateSubscriptionSchema),
  ctrlWrapper(updateUserSubscription)
);
authRouter.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);
