import { CorsOptions } from "cors";

const allowedOrigins = [
  "http://localhost:5173",
];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // allow tools like Postman (no origin)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"), false);
  },

  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};

export default corsOptions;