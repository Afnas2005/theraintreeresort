'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const CONTACT_INFO = {
  address: 'Tholpetty, Wayanad District, Kerala, India 670646',
  phone: '96058 09293',
  email: 'raintreeresort82@gmail.com',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Call our new API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Submission failed:', result.error);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-forest-base pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="block text-forest-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-forest-gold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-forest-text/80 max-w-2xl mx-auto font-light">
            Whether you need assistance with booking or have a question about our safaris, we are here to help.
          </p>
        </div>

        {/* --- INFO CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-forest-medium p-8 text-center flex flex-col items-center group hover:bg-forest-rich transition-colors duration-300">
            <div className="w-12 h-12 bg-forest-base flex items-center justify-center rounded-full mb-6 text-forest-gold group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-forest-gold mb-2">Visit Us</h3>
            <p className="text-forest-text text-sm leading-relaxed max-w-[200px]">
              {CONTACT_INFO.address}
            </p>
          </div>

          <div className="bg-forest-medium p-8 text-center flex flex-col items-center group hover:bg-forest-rich transition-colors duration-300">
            <div className="w-12 h-12 bg-forest-base flex items-center justify-center rounded-full mb-6 text-forest-gold group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-forest-gold mb-2">Call Us</h3>
            <p className="text-forest-text text-sm">{CONTACT_INFO.phone}</p>
          </div>

          <div className="bg-forest-medium p-8 text-center flex flex-col items-center group hover:bg-forest-rich transition-colors duration-300">
            <div className="w-12 h-12 bg-forest-base flex items-center justify-center rounded-full mb-6 text-forest-gold group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-forest-gold mb-2">Email Us</h3>
            <p className="text-forest-text text-sm">{CONTACT_INFO.email}</p>
          </div>
        </div>

        {/* --- FORM & MAP GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-forest-medium/30">
          
          {/* 1. Contact Form */}
          <div className="bg-forest-medium/10 p-8 md:p-12">
            <h2 className="font-serif text-2xl font-bold text-forest-gold mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-forest-medium text-forest-text p-4 text-sm outline-none border border-transparent focus:border-forest-gold/50 transition-colors placeholder:text-forest-text/40"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-forest-medium text-forest-text p-4 text-sm outline-none border border-transparent focus:border-forest-gold/50 transition-colors placeholder:text-forest-text/40"
                />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-forest-medium text-forest-text p-4 text-sm outline-none border border-transparent focus:border-forest-gold/50 transition-colors placeholder:text-forest-text/40"
              />
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-forest-medium text-forest-text p-4 text-sm outline-none border border-transparent focus:border-forest-gold/50 transition-colors text-forest-text/80 cursor-pointer"
              >
                <option value="" disabled>Select a Subject</option>
                <option value="reservation">Room Reservation</option>
                <option value="safari">Safari Inquiry</option>
                <option value="event">Private Event</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="bg-forest-medium text-forest-text p-4 text-sm outline-none border border-transparent focus:border-forest-gold/50 transition-colors resize-none placeholder:text-forest-text/40"
              ></textarea>
              
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`mt-2 font-bold py-4 px-8 uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2
                  ${status === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-forest-gold text-forest-base hover:bg-white'
                  }
                `}
              >
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && (
                  <>Sent Successfully <CheckCircle size={16} /></>
                )}
                {status === 'error' && (
                  <>Failed - Try Again <AlertCircle size={16} /></>
                )}
                {status === 'idle' && (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>

          {/* 2. Map Section */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] bg-forest-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.828862413236!2d76.04634287574744!3d11.93444493309503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d92949704e6d%3A0x6b7774d823439e6a!2sTholpetty%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1709665544211!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} // Custom dark mode map filter
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Resort Location"
              className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>

        </div>
      </main>
    </div>
  );
}