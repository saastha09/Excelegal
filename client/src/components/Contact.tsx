import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must not exceed 500 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const [titleRef, titleInView] = useScrollReveal();
  const [formRef, formInView] = useScrollReveal();
  const [infoRef, infoInView] = useScrollReveal();
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We will get back to you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message}`,
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <motion.div 
            ref={formRef}
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0f0f2d] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-semibold">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className={`w-full bg-[#0a0a23] border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                    placeholder="Enter your first name"
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-semibold">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className={`w-full bg-[#0a0a23] border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                    placeholder="Enter your last name"
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full bg-[#0a0a23] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                    placeholder="Enter your email address"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className={`w-full bg-[#0a0a23] border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                    placeholder="Enter your phone number"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className={`w-full bg-[#0a0a23] border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                  placeholder="Type your message here..."
                  {...register('message')}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="btn-glow bg-[#0d6efd] hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:ring-opacity-50"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            ref={infoRef}
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#0f0f2d] p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-[#0d6efd] text-xl mr-4 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-200">123 Tech Park, Innovation Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-[#0d6efd] text-xl mr-4 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-200">info@excelegal.com</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-[#0d6efd] text-xl mr-4 mt-1">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-200">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#0a0a23] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0d6efd] transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-[#0a0a23] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0d6efd] transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-[#0a0a23] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#0d6efd] transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
