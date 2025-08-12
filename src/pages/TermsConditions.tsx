import "react";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Users,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="page-bg-aesthetic">
      {/* Hero Section */}
      <section className="relative py-24 hero-modern multipage-hero">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Scale className="h-8 w-8 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-lg uppercase tracking-wider">
              Legal Terms
            </span>
            <FileText className="h-8 w-8 text-emerald-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 text-glow-modern"
          >
            Terms & Conditions
            <span className="block text-emerald-300 text-3xl md:text-5xl mt-2 text-glow-modern">
              Service Agreement
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Please read these terms and conditions carefully before using our
            services
          </motion.p>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-20 section-modern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-aesthetic p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center space-x-3 mb-8">
                <FileText className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-modern mb-0">
                  Terms & Conditions
                </h2>
              </div>

              <div className="space-y-8">
                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Acceptance of Terms
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste your terms acceptance clause here. This
                      section should include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Agreement to be bound by these terms</li>
                      <li>Conditions for using our services</li>
                      <li>Age and capacity requirements</li>
                      <li>Jurisdiction and governing law</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      User Responsibilities
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste user responsibilities here. This should
                      cover:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Providing accurate information</li>
                      <li>Maintaining confidentiality of account details</li>
                      <li>Compliance with applicable laws</li>
                      <li>Respectful communication and conduct</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Scale className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Property Services
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste property service terms here. This should
                      include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Property viewing and consultation services</li>
                      <li>Information accuracy and updates</li>
                      <li>Booking and scheduling policies</li>
                      <li>Payment terms and conditions</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Limitations & Disclaimers
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste limitations and disclaimers here. This should
                      cover:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Limitation of liability</li>
                      <li>Service availability disclaimers</li>
                      <li>Property information accuracy</li>
                      <li>Third-party content and links</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Intellectual Property
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste intellectual property terms here. This should
                      include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Copyright and trademark ownership</li>
                      <li>Permitted use of website content</li>
                      <li>Restrictions on reproduction</li>
                      <li>User-generated content rights</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Termination
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste termination terms here. This should cover:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Conditions for service termination</li>
                      <li>User account suspension or deletion</li>
                      <li>Effect of termination on ongoing services</li>
                      <li>Data retention after termination</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6 bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-emerald-800">
                      Contact Information
                    </h3>
                  </div>
                  <div className="text-emerald-700">
                    <p className="mb-3">
                      For questions about these Terms & Conditions, please
                      contact:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>
                          <strong>Email:</strong> legal@abuhills.com
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>
                          <strong>Phone:</strong> +91-93275-860-40
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>
                          <strong>Address:</strong> Abu Hills, Premium Location
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500">
                    Last updated: [Please add your last update date]
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">
                    These terms are subject to change. Users will be notified of
                    any significant updates.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
