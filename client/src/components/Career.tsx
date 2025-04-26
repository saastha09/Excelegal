import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

const careerFormSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters'),
  resume: z.any().optional()
});

type CareerFormData = z.infer<typeof careerFormSchema>;

const Career: React.FC = () => {
  const [titleRef, titleInView] = useScrollReveal();
  const [formRef, formInView] = useScrollReveal();
  const [fileName, setFileName] = useState<string>('');
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CareerFormData>({
    resolver: zodResolver(careerFormSchema)
  });
  
  const careerMutation = useMutation({
    mutationFn: async (data: CareerFormData) => {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      
      if (data.resume && data.resume[0]) {
        formData.append('resume', data.resume[0]);
      }
      
      const response = await apiRequest('POST', '/api/career', formData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Thank you for your application! We will review it and get back to you soon.",
      });
      reset();
      setFileName('');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to submit application: ${error.message}`,
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: CareerFormData) => {
    careerMutation.mutate(data);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };
  
  return (
    <section id="career" className="py-16 md:py-24 bg-[#0f0f2d]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Join Our Team at Excelegal
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-200 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're always looking for talented individuals to join our team. Whether you're an experienced professional or a fresh graduate, 
            we have opportunities that will help you grow and make an impact.
          </motion.p>
          
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#0a0a23] p-8 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <label htmlFor="fullName" className="block mb-2 font-semibold">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                className={`w-full bg-[#0f0f2d] border ${errors.fullName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                placeholder="Enter your full name"
                {...register('fullName')}
              />
              {errors.fullName && (
                <p className="mt-1 text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input 
                type="email" 
                id="email" 
                className={`w-full bg-[#0f0f2d] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                placeholder="Enter your email address"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-semibold">Contact Number</label>
              <input 
                type="tel" 
                id="phone" 
                className={`w-full bg-[#0f0f2d] border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white input-animation focus:outline-none focus:border-[#0d6efd]`}
                placeholder="Enter your contact number"
                {...register('phone')}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            
            <div className="mb-8">
              <label htmlFor="resume" className="block mb-2 font-semibold">Upload Resume</label>
              <div className="relative">
                <input 
                  type="file" 
                  id="resume" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                  {...register('resume')}
                  onChange={handleFileChange}
                />
                <label htmlFor="resume" className="flex items-center justify-center w-full bg-[#0f0f2d] border border-gray-700 rounded-lg px-4 py-3 text-white cursor-pointer hover:bg-gray-800 transition duration-300">
                  <i className="fas fa-upload mr-2"></i> Choose File (PDF, DOC accepted)
                </label>
                {fileName && (
                  <div className="mt-2 text-sm text-gray-400">{fileName}</div>
                )}
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full btn-glow bg-[#0d6efd] hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:ring-opacity-50"
              disabled={careerMutation.isPending}
            >
              {careerMutation.isPending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Apply Now"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Career;
