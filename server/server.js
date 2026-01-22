 import express from "express";
 import "dotenv/config";
 import cors from "cors";
 import { clerkMiddleware } from '@clerk/express'
 import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

 const app = express();

 app.use(express.json());
 app.use(cors({
   origin: ["http://localhost:5173", "https://flipear-client.vercel.app"],
   credentials: true
 }));
 
app.use(clerkMiddleware())

 app.get("/", (req, res)=> res.send("Server is live!"));
 
 // Inngest sync endpoint with proper configuration
 app.use("/api/inngest", serve({ 
   client: inngest, 
   functions,
   servePath: "/api/inngest"
 }));

 const PORT = process.env.PORT || 3001;
 app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
 });

export default app;
