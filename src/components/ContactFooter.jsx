import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { ArrowUpRight, Check, Send } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <footer id="contact" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Closing Statement & Links (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">07 // CONTACT</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-textPrimary">
              Let's translate numbers into decisions.
            </h2>
            <p className="text-sm text-textSecondary mt-4 max-w-sm font-sans leading-relaxed">
              I am open to Data Analyst and Data Science opportunities. Whether you have a project, an internship opening, or want to discuss prediction models—reach out.
            </p>
          </div>

          {/* Social list styled like book table of contents */}
          <div className="space-y-4 pt-4">
            <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest block border-b border-borderSubtle pb-2">
              channels of communication
            </span>
            
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center justify-between text-textSecondary hover:text-accent group py-1"
                >
                  <span className="font-medium">Direct Email</span>
                  <span className="flex-1 border-b border-dotted border-borderSubtle mx-4" />
                  <span className="font-mono text-xs flex items-center gap-1 group-hover:underline text-textPrimary">
                    {personalDetails.email} <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-textSecondary hover:text-accent group py-1"
                >
                  <span className="font-medium">LinkedIn</span>
                  <span className="flex-1 border-b border-dotted border-borderSubtle mx-4" />
                  <span className="font-mono text-xs flex items-center gap-1 group-hover:underline text-textPrimary">
                    shreya-mishra-analytics <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-textSecondary hover:text-accent group py-1"
                >
                  <span className="font-medium">GitHub</span>
                  <span className="flex-1 border-b border-dotted border-borderSubtle mx-4" />
                  <span className="font-mono text-xs flex items-center gap-1 group-hover:underline text-textPrimary">
                    shreyamishra-sudo <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Editorial Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-bgSurface border border-borderSubtle p-8 md:p-10 shadow-xl">
          <h3 className="text-xs font-mono uppercase tracking-widest text-textMuted border-b border-borderSubtle pb-4 mb-6">
            message submission
          </h3>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 bg-accent-muted text-accent rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-textPrimary">Message Transmitted</h4>
              <p className="text-sm text-textSecondary max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. The data payload has been received and I will respond via email shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-accent hover:underline pt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] font-mono text-textMuted uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={`bg-transparent border-b py-2 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent ${
                      errors.name ? 'border-red-500' : 'border-borderSubtle'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.name}</span>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-mono text-textMuted uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={`bg-transparent border-b py-2 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent ${
                      errors.email ? 'border-red-500' : 'border-borderSubtle'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[10px] font-mono text-textMuted uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Data Analyst Opportunity / Project Query"
                  className="bg-transparent border-b border-borderSubtle py-2 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] font-mono text-textMuted uppercase tracking-wider mb-1">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team or project details..."
                  className={`bg-transparent border-b py-2 text-sm text-textPrimary placeholder:text-textMuted resize-none focus:outline-none focus:border-accent ${
                    errors.message ? 'border-red-500' : 'border-borderSubtle'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-500 mt-1 font-mono">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-accent text-white hover:bg-opacity-90 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Editorial Footer Markings */}
      <div className="mt-20 pt-8 border-t border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-textMuted uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Shreya Mishra · All rights reserved</span>
        <div className="flex gap-6">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-accent transition-colors"
          >
            top of page
          </a>
          <a href="#case-study" className="hover:text-accent transition-colors">featured study</a>
          <a href="#projects" className="hover:text-accent transition-colors">projects</a>
        </div>
      </div>
    </footer>
  );
}
