import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  MapPin,
  Calendar,
  Users,
  Shield,
  Wifi,
  Crown,
  Star,
  Award,
  Sparkles,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Home,
      title: "Spacious Living",
      description:
        "Thoughtfully designed spaces with modern architecture and premium finishes",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description:
        "Perfectly situated weekend villas in a serene natural environment",
    },
    {
      icon: Calendar,
      title: "Built in 2018",
      description:
        "Modern construction with contemporary amenities and luxury features",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description:
        "Designed for comfortable family living and entertaining guests",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description:
        "Round-the-clock security and water supply for peace of mind",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "All modern conveniences for a comfortable weekend retreat",
    },
  ];

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
            <Crown className="h-8 w-8 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-lg uppercase tracking-wider">
              Premium Estates
            </span>
            <Crown className="h-8 w-8 text-emerald-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 text-glow-modern"
          >
            About Abu Hills
            <span className="block text-emerald-300 text-3xl md:text-5xl mt-2 text-glow-modern">
              Luxury Redefined
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Where architectural excellence meets natural serenity in perfect
            harmony, creating the ultimate luxury weekend experience
          </motion.p>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-20 section-modern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-emerald-600 fill-current" />
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  Luxury Living
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-modern mb-8">
                Premium Weekend Villas
                <span className="block text-aesthetic text-3xl md:text-4xl mt-2">
                  Architectural Excellence
                </span>
              </h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-light">
                Abu Hills presents meticulously crafted weekend villas that
                epitomize luxury living. Each residence is thoughtfully designed
                to offer an unparalleled escape from urban life while providing
                every modern convenience and premium amenity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="card-modern p-6 text-center interactive-modern">
                  <h3 className="text-3xl font-bold text-modern">2640</h3>
                  <p className="text-neutral-600 font-medium uppercase tracking-wider text-sm">
                    SQ. FT
                  </p>
                </div>
                <div className="card-modern p-6 text-center interactive-modern">
                  <h3 className="text-3xl font-bold text-modern">2018</h3>
                  <p className="text-neutral-600 font-medium uppercase tracking-wider text-sm">
                    Built Year
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-modern">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Abu Hills Villa"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-emerald-500/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-premium rounded-2xl p-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      Luxury Villa Architecture
                    </h3>
                    <p className="text-white/80">
                      Premium construction meets elegant design
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 section-modern relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-emerald-600" />
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Premium Features
              </span>
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-modern mb-6">
              Why Choose Abu Hills?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect fusion of luxury, comfort, and natural
              beauty in our meticulously designed weekend villas
            </p>
          </motion.div>

          <div className="grid-modern">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-aesthetic p-8 text-center interactive-modern"
              >
                <div className="bg-modern w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-aesthetic-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-modern mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Specifications */}
      <section className="py-20 section-modern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-emerald-600" />
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Premium Specifications
              </span>
              <Sparkles className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-modern mb-6">
              Villa Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Spacious Bedrooms",
                description:
                  "Luxuriously appointed with premium fixtures and finishes",
              },
              {
                title: "Modern Bathrooms",
                description:
                  "Designer fittings with contemporary luxury aesthetics",
              },
              {
                title: "Elegant Drawing Room",
                description: "Sophisticated spaces perfect for entertaining",
              },
              {
                title: "Premium Kitchen",
                description: "State-of-the-art appliances with luxury finishes",
              },
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-modern p-6 interactive-modern"
              >
                <h3 className="text-lg font-bold text-modern mb-3">
                  {spec.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
