import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message, type } = req.body;
      
      // In a real application, you would:
      // 1. Validate the input data
      // 2. Save to database
      // 3. Send confirmation email
      // 4. Notify internal team
      
      console.log("Contact form submission:", {
        name,
        email, 
        company,
        message,
        type,
        timestamp: new Date().toISOString()
      });
      
      res.json({
        success: true,
        message: "Thank you for your interest! We'll be in touch soon."
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "There was an error processing your request. Please try again."
      });
    }
  });

  // Demo request endpoint
  app.post("/api/demo-request", async (req, res) => {
    try {
      const { name, email, company, role, urgency } = req.body;
      
      console.log("Demo request:", {
        name,
        email,
        company, 
        role,
        urgency,
        timestamp: new Date().toISOString()
      });
      
      res.json({
        success: true,
        message: "Demo request submitted successfully! Our team will contact you within 24 hours."
      });
    } catch (error) {
      console.error("Demo request error:", error);
      res.status(500).json({
        success: false,
        message: "There was an error processing your demo request. Please try again."
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      console.log("Newsletter subscription:", {
        email,
        timestamp: new Date().toISOString()
      });
      
      res.json({
        success: true,
        message: "Successfully subscribed to our newsletter!"
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(500).json({
        success: false,
        message: "There was an error subscribing to our newsletter. Please try again."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
