import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Calendar,
  Send,
  Download,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  visitDate?: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91-93275-860-40", "+91-93274-452-76"],
      action: "tel:+919327586040",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@abuhills.com", "sales@abuhills.com"],
      action: "mailto:info@abuhills.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Abu Hills Weekend Villas", "Premium Location, Gujarat"],
      action: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 5:00 PM",
      ],
      action: null,
    },
  ];

  const downloadBrochure = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 1000;
    ctx.fillStyle = "#f0f9f0";
    ctx.fillRect(0, 0, 800, 1000);
    ctx.fillStyle = "#10b981";
    ctx.fillRect(0, 0, 800, 100);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 32px Arial";
    ctx.fillText("Abu Hills - Luxury Weekend Villas", 50, 60);
    ctx.fillStyle = "#256325";
    ctx.font = "bold 24px Arial";
    ctx.fillText("Property Details", 50, 150);
    ctx.font = "18px Arial";
    ctx.fillText("• Total Area: 2640 SQ. FT", 50, 180);
    ctx.fillText("• Built Year: 2018", 50, 210);
    ctx.fillText("• Spacious Bedrooms with Modern Design", 50, 240);
    ctx.fillText("• Premium Bathrooms with Luxury Fittings", 50, 270);
    ctx.fillText("• Elegant Kitchen with Modern Appliances", 50, 300);
    ctx.fillText("• Beautiful Drawing Room for Entertainment", 50, 330);
    ctx.font = "bold 24px Arial";
    ctx.fillText("Premium Amenities", 50, 380);
    ctx.font = "18px Arial";
    ctx.fillText("• 24/7 Water Supply & Security", 50, 410);
    ctx.fillText("• Swimming Pool & Landscape Garden", 50, 440);
    ctx.fillText("• Club House & Recreation Facilities", 50, 470);
    ctx.fillText("• Internal R.C.C. Roads & Parking", 50, 500);
    ctx.fillText("• Power Backup & Modern Amenities", 50, 530);
    ctx.font = "bold 24px Arial";
    ctx.fillText("Contact Information", 50, 580);
    ctx.font = "18px Arial";
    ctx.fillText("Vinayak Realty", 50, 610);
    ctx.fillText("(A Dream Well Designed)", 50, 640);
    ctx.fillText("Phone: +91-93275-860-40", 50, 670);
    ctx.fillText("Phone: +91-93274-452-76", 50, 700);
    ctx.fillText("Email: info@abuhills.com", 50, 730);
    ctx.fillStyle = "#10b981";
    ctx.fillRect(0, 900, 800, 100);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px Arial";
    ctx.fillText("Schedule Your Visit Today!", 250, 950);
    const link = document.createElement("a");
    link.download = "abu-hills-luxury-villas-brochure.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="page-bg-aesthetic">
      {/* Hero Section */}
      <section className="relative py-20 hero-modern multipage-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow-modern"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Get in touch with us to schedule your visit to Abu Hills luxury
            weekend villas
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-modern mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're here to help you find your perfect weekend villa. Contact us
              through any of the following methods.
            </p>
          </motion.div>

          <div className="grid-luxury mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-modern p-8 flex flex-col items-center text-center"
              >
                <div className="bg-luxury shadow-luxury w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-luxury-pulse">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-modern mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-neutral-700">
                      {info.action && detailIndex === 0 ? (
                        <a
                          href={info.action}
                          className="text-luxury hover:underline"
                          target={
                            info.action.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            info.action.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-aesthetic p-10"
            >
              <h3 className="text-2xl font-bold text-modern mb-6">
                Schedule Your Visit
              </h3>

              {submitSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg mb-6">
                  Thank you! We'll contact you soon to schedule your visit.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="form-luxury pl-10"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-rose-600 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      className="form-luxury pl-10"
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-rose-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      type="tel"
                      className="form-luxury pl-10"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-rose-600 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      {...register("visitDate")}
                      type="date"
                      className="form-luxury pl-10"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                    <textarea
                      {...register("message")}
                      className="form-luxury pl-10"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-luxury flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-modern mb-4">
                  Location Map
                </h3>
                <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-luxury mx-auto mb-2" />
                    <p className="text-neutral-700">Abu Hills Weekend Villas</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury hover:underline text-sm mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Brochure */}
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-modern mb-4">
                  Download Brochure
                </h3>
                <p className="text-neutral-700 mb-4">
                  Get detailed information about Abu Hills luxury weekend
                  villas, including floor plans, amenities, and pricing.
                </p>
                <button
                  onClick={downloadBrochure}
                  className="w-full btn-luxury flex items-center justify-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Brochure</span>
                </button>
              </div>

              {/* Company Info */}
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-modern mb-4">
                  About Vinayak Realty
                </h3>
                <p className="text-neutral-700 mb-4">
                  "A Dream Well Designed" - We specialize in creating luxury
                  weekend homes that blend contemporary lifestyle with natural
                  serenity.
                </p>
                <div className="space-y-2 text-sm text-neutral-700">
                  <p>• Established real estate developer</p>
                  <p>• Focus on luxury weekend properties</p>
                  <p>• Commitment to quality and customer satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-800 to-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Abu Hills?
            </h2>
            <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a personal tour and let us help you discover your dream
              villa.
            </p>
            <a
              href="#"
              className="btn-modern text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              <span>Schedule Site Visit</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
