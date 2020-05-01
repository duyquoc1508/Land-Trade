import userRoutes from "./user/user.route";
import authRoutes from "./auth/auth.route";
import certificationRoutes from "./certification/certification.route";
import uploadRoutes from "./upload/upload.route";
import notificationRoutes from "./notification/notification.route";

export default (app) => {
  app.use("/api/v1/upload", uploadRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/certification", certificationRoutes);
  app.use("/api/v1/notification", notificationRoutes);
};
