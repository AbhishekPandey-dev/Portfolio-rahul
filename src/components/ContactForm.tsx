"use client";

import { useState } from "react";
import { sendEmailAction } from "@/app/actions";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmailAction(formData);

    setIsPending(false);

    if (result.success) {
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
    }
  }

  return (
    <div className="w-full md:w-[55%] bg-surface-container-low p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">Your Name</label>
            <input 
              name="name"
              required
              className="underline-input font-body" 
              placeholder="John Doe" 
              type="text" 
            />
          </div>
          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">Your Email</label>
            <input 
              name="email"
              required
              className="underline-input font-body" 
              placeholder="john@example.com" 
              type="email" 
            />
          </div>
        </div>
        <div className="relative">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">Project Type</label>
          <select 
            name="projectType"
            className="underline-input font-body" 
            defaultValue="Select a service"
          >
            <option disabled value="Select a service">Select a service</option>
            <option value="Shopify Development">Shopify Development</option>
            <option value="WordPress Development">WordPress Development</option>
            <option value="Custom Web App">Custom Web App</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
        </div>
        <div className="relative">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">Tell me about your project</label>
          <textarea 
            name="message"
            required
            className="underline-input font-body resize-none" 
            placeholder="Briefly describe your goals and timeline..." 
            rows={4}
          ></textarea>
        </div>
        
        {status && (
          <div className={`p-4 text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {status.message}
          </div>
        )}

        <button 
          disabled={isPending}
          className="w-full bg-primary text-on-primary font-headline font-bold uppercase tracking-widest py-5 hover:bg-primary-fixed transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
