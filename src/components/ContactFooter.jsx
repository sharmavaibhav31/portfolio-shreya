import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, Send, MapPin, CheckCircle, BarChart2, Heart } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

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
      errs.email = 'Invalid email format';
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
    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <footer id="contact" className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // INITIATE PIPELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textPrimary tracking-tight">
            Get In Touch
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          OPEN FOR DATA ANALYST & SCIENCE OPPORTUNITIES
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Contact Links & Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bi-card rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-heading font-bold text-textPrimary">
              Let's Connect & Collaborate
            </h3>

            <p className="text-textSecondary text-sm leading-relaxed">
              I am actively looking for Data Analyst and Data Science opportunities. Whether you have a project, an internship opening, or just want to talk about data pipelines, reach out!
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-bgPrimary hover:bg-bgSurfaceHover border border-borderSubtle hover:border-accent/40 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-textMuted uppercase block">Direct Email</span>
                  <span className="text-xs sm:text-sm font-mono text-textPrimary group-hover:text-accent truncate block">
                    {personalDetails.email}
                  </span>
                </div>
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-bgPrimary hover:bg-bgSurfaceHover border border-borderSubtle hover:border-accent/40 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-500 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-textMuted uppercase block">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-mono text-textPrimary group-hover:text-accent block">
                    linkedin.com/in/shreya-mishra-analytics
                  </span>
                </div>
              </a>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-bgPrimary hover:bg-bgSurfaceHover border border-borderSubtle hover:border-accent/40 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-textMuted uppercase block">GitHub Repositories</span>
                  <span className="text-xs sm:text-sm font-mono text-textPrimary group-hover:text-accent block">
                    github.com/shreyamishra-sudo
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bi-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-heading font-bold text-textPrimary mb-6">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-lg font-heading font-bold text-textPrimary">Message Sent Successfully!</h4>
                <p className="text-sm text-textSecondary font-mono">
                  Thank you for reaching out. I'll get back to your email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-bgSurface hover:bg-bgSurfaceHover border border-borderSubtle text-xs font-mono text-accent"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-textMuted mb-1 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-bgPrimary border text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                        errors.name ? 'border-red-500' : 'border-borderSubtle'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] font-mono text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-textMuted mb-1 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-bgPrimary border text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                        errors.email ? 'border-red-500' : 'border-borderSubtle'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] font-mono text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-textMuted mb-1 uppercase">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Data Analyst Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-bgPrimary border border-borderSubtle text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-textMuted mb-1 uppercase">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Shreya, I would love to discuss a Data Analytics opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-bgPrimary border text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.message ? 'border-red-500' : 'border-borderSubtle'
                    }`}
                  />
                  {errors.message && <span className="text-[11px] font-mono text-red-500 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="pt-8 border-t border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMuted">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-accent" />
          <span>© {new Date().getFullYear()} Shreya Mishra. Designed as a Live BI Dashboard.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#dashboard" className="hover:text-accent transition-colors">Top</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
