// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast.success('Message received! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // In production, you would send this to an email service
    console.log('Form submission:', formData);
  };

  const handleWhatsAppChat = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '250788000000';
    const message = 'Hi! I have a question about My Shoes Rwanda.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <HeroSection
        title="Get In Touch"
        subtitle="We're here to help and answer any question"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+250788000000"
                  className="text-accent hover:text-accent/80 transition"
                >
                  +250 788 000 000
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <MessageCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <button
                  onClick={handleWhatsAppChat}
                  className="text-accent hover:text-accent/80 transition text-left"
                >
                  Chat with us on WhatsApp
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:info@myshoes.rw"
                  className="text-accent hover:text-accent/80 transition"
                >
                  info@myshoes.rw
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  Kigali, Rwanda
                  <br />
                  Across from major shopping centers
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
                <p className="mt-3 text-accent font-semibold">
                  Response time: Within 2 hours (business hours)
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-issue">Order Issue</option>
                    <option value="return">Return/Exchange</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="border-t border-border pt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'How can I place an order?',
                a: 'Browse our shop, add items to cart, and click "Checkout on WhatsApp". Send your order details, and we\'ll confirm availability and payment terms.',
              },
              {
                q: 'Can I track my order?',
                a: 'Yes, we provide WhatsApp updates with tracking info after your payment is confirmed.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept MTN Mobile Money, Airtel Money, bank transfer, and cash on delivery in Kigali.',
              },
              {
                q: 'How long does delivery take?',
                a: 'Kigali: 2-3 days. Other provinces: 3-5 days. Times are from confirmed payment.',
              },
              {
                q: 'Can I return or exchange shoes?',
                a: 'Yes, 30-day returns/exchanges for unworn shoes in original packaging. See our Shipping & Returns page for details.',
              },
              {
                q: 'Do you have a physical store?',
                a: 'We operate primarily online via WhatsApp. Visit us in Kigali by appointment during business hours.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-secondary/50 dark:bg-slate-800 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
