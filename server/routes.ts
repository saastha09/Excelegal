import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import { z } from "zod";

// Define contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must not exceed 500 characters')
});

// Define career form schema
const careerFormSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters')
});

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (_req, file, cb) => {
    // Accept only PDF and DOC files
    if (
      file.mimetype === 'application/pdf' ||
      file.mimetype === 'application/msword' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and DOC files are allowed'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in a real app, this would be saved to a database)
      console.log('Contact form submission:', validatedData);
      
      // Success response
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        // Return general error
        res.status(500).json({ success: false, message: 'An error occurred while processing your request' });
      }
    }
  });
  
  // Career application submission
  app.post('/api/career', upload.single('resume'), async (req, res) => {
    try {
      // Validate request body
      const validatedData = careerFormSchema.parse(req.body);
      
      // Get resume file data
      const resumeFile = req.file ? {
        filename: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
      } : null;
      
      // Log the career application (in a real app, this would be saved to a database)
      console.log('Career application:', {
        ...validatedData,
        resumeFile
      });
      
      // Success response
      res.status(200).json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        // Return general error
        res.status(500).json({ success: false, message: 'An error occurred while processing your request' });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
