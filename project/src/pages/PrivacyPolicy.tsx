import "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  FileText,
  AlertCircle,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-lg uppercase tracking-wider">
              Privacy & Security
            </span>
            <Lock className="h-8 w-8 text-emerald-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 text-glow-modern"
          >
            Privacy Policy
            <span className="block text-emerald-300 text-3xl md:text-5xl mt-2 text-glow-modern">
              Your Data Protection
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are committed to protecting your privacy and ensuring the
            security of your personal information
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                  Privacy Policy Details
                </h2>
              </div>

              <div className="space-y-8">
                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Information We Collect
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste your information collection policy here. This
                      section should include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Personal information (name, email, phone number)</li>
                      <li>Property inquiry details</li>
                      <li>Website usage data</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      How We Use Your Information
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste your information usage policy here. This
                      section should cover:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Property consultation and communication</li>
                      <li>Marketing and promotional activities</li>
                      <li>Service improvement and analytics</li>
                      <li>Legal compliance requirements</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Data Protection & Security
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste your data protection measures here. This
                      should include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Encryption and secure storage methods</li>
                      <li>Access control and authorization</li>
                      <li>Regular security audits and updates</li>
                      <li>Data breach response procedures</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <UserCheck className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Your Rights
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste information about user rights here. This
                      should cover:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Right to access your personal data</li>
                      <li>Right to correct or update information</li>
                      <li>Right to delete your data</li>
                      <li>Right to opt-out of communications</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-neutral-800">
                      Policy Updates
                    </h3>
                  </div>
                  <div className="text-neutral-600 space-y-3">
                    <p>
                      Please paste your policy update information here. This
                      should include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>How users will be notified of changes</li>
                      <li>Effective date of policy updates</li>
                      <li>User consent for continued service</li>
                      <li>Contact information for questions</li>
                    </ul>
                  </div>
                </div>

                <div className="card-modern p-6 bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-emerald-800">
                      Contact Us
                    </h3>
                  </div>
                  <div className="text-emerald-700">
                    <p className="mb-3">
                      If you have any questions about this Privacy Policy,
                      please contact us:
                    </p>
                    <div className="space-y-2">
                      <p>
                        <strong>Email:</strong> privacy@abuhills.com
                      </p>
                      <p>
                        <strong>Phone:</strong> +91-93275-860-40
                      </p>
                      <p>
                        <strong>Address:</strong> Abu Hills, Premium Location
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
