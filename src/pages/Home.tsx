import "react";
import { Link } from "react-router-dom";
import {
  Crown,
  Star,
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Download,
  ChevronRight,
  Sparkles,
  Home as HomeIcon,
  Car,
  Wifi,
  Shield,
  Waves,
  TreePine,
  Users,
} from "lucide-react";
import img2 from "../Abu_Photos/Abu_02.jpg";

const Home: React.FC = () => {
  const handleDownloadBrochure = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 1600;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#f0f9f0");
    gradient.addColorStop(1, "#faf7ff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header
    const headerGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    headerGradient.addColorStop(0, "#3a9f3a");
    headerGradient.addColorStop(1, "#2d7d2d");
    ctx.fillStyle = headerGradient;
    ctx.fillRect(0, 0, canvas.width, 150);

    // Title
    ctx.fillStyle = "white";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("ABU HILLS", canvas.width / 2, 70);
    ctx.font = "24px Arial";
    ctx.fillText("Luxury Weekend Villas", canvas.width / 2, 110);

    // Content sections
    ctx.fillStyle = "#262626";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Premium Villa Features", 80, 220);

    ctx.font = "20px Arial";
    const features = [
      "• Spacious bedrooms with luxury finishes",
      "• Modern kitchen with premium appliances",
      "• Private parking and garden access",
      "• 24/7 security and water supply",
      "• Swimming pool and fitness facilities",
      "• Landscaped gardens and peaceful environment",
      "• Club house and recreational amenities",
    ];

    let y = 270;
    features.forEach((feature) => {
      ctx.fillText(feature, 100, y);
      y += 40;
    });

    // Amenities section
    ctx.font = "bold 32px Arial";
    ctx.fillText("World-Class Amenities", 80, y + 60);
    y += 110;

    ctx.font = "20px Arial";
    const amenities = [
      "• Swimming Pool & Fitness Center",
      "• 24/7 Security & Water Supply",
      "• Landscaped Gardens & Green Spaces",
      "• Club House & Community Areas",
      "• Internal Roads & Parking",
      "• Modern Infrastructure & Utilities",
    ];

    amenities.forEach((amenity) => {
      ctx.fillText(amenity, 100, y);
      y += 40;
    });

    // Contact section
    ctx.font = "bold 32px Arial";
    ctx.fillText("Contact Information", 80, y + 60);
    y += 110;

    ctx.font = "24px Arial";
    ctx.fillText("Vinayak Realty", 100, y);
    y += 35;
    ctx.font = "18px Arial";
    ctx.fillStyle = "#3a9f3a";
    ctx.fillText("(A Dream Well Designed)", 100, y);
    y += 50;

    ctx.fillStyle = "#262626";
    ctx.font = "20px Arial";
    ctx.fillText("Phone: +91-93275-860-40", 100, y);
    y += 35;
    ctx.fillText("Phone: +91-93274-452-76", 100, y);
    y += 35;
    ctx.fillText("Email: info@abuhills.com", 100, y);
    y += 35;
    ctx.fillText("Location: Abu Hills, Premium Location", 100, y);

    // Footer
    const footerGradient = ctx.createLinearGradient(
      0,
      canvas.height - 100,
      canvas.width,
      canvas.height - 100
    );
    footerGradient.addColorStop(0, "#3a9f3a");
    footerGradient.addColorStop(1, "#2d7d2d");
    ctx.fillStyle = footerGradient;
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

    ctx.fillStyle = "white";
    ctx.font = "bold 28px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      "Schedule Your Visit Today!",
      canvas.width / 2,
      canvas.height - 40
    );

    // Download
    const link = document.createElement("a");
    link.download = "abu-hills-luxury-villas-brochure.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const amenities = [
    { icon: Waves, name: "Swimming Pool", category: "Recreation" },
    { icon: Shield, name: "24/7 Security", category: "Safety" },
    { icon: Car, name: "Private Parking", category: "Convenience" },
    { icon: TreePine, name: "Garden Views", category: "Nature" },
    { icon: Wifi, name: "Modern Amenities", category: "Technology" },
    { icon: Users, name: "Club House", category: "Community" },
  ];

  return (
    <div className="page-bg-aesthetic">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-modern">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${img2}')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/85 via-emerald-900/30 to-transparent"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-modern-float">
          <div className="flex items-center justify-center mb-1 md:mb-6 space-x-4">
            <Crown className="w-6 h-12 md:w-12 text-emerald-300 animate-pulse" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-6 md:w-6 text-emerald-300 fill-current"
                />
              ))}
            </div>
            <Award className="w-6 h-12 md:w-12 text-emerald-300" />
          </div>

          <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-200 via-white to-rose-200 bg-clip-text text-transparent text-glow-modern animate-minimalistic-float">
            ABU HILLS
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-emerald-100 font-light tracking-wide">
            Luxury Weekend Homes
          </p>

          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 glass-premium px-4 py-2 rounded-full animate-minimalistic-pulse">
              <Sparkles className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-100">Premium Rated</span>
            </div>
            <div className="flex items-center space-x-2 glass-premium px-4 py-2 rounded-full animate-minimalistic-pulse">
              <Award className="w-5 h-5 text-rose-300" />
              <span className="text-rose-100">Award Winning</span>
            </div>
          </div>

          <p className="text-xl mb-8 text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury living in our meticulously
            designed weekend homes, where every detail reflects sophistication
            and comfort in the peaceful Abu Hills community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="
    btn-modern group 
    px-6 py-3 text-base 
    sm:px-8 sm:py-4 sm:text-lg
    text-white rounded-2xl font-semibold 
    transform hover:scale-105 transition-all duration-300 
    animate-minimalistic-shimmer
  "
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Schedule Visit
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={handleDownloadBrochure}
              className="flex
              items-center justify-center
    glass-premium group
    px-6 py-3 text-base
    sm:px-8 sm:py-4 sm:text-lg
    border-2 border-white/30 text-white 
    rounded-2xl font-semibold 
    hover:bg-white/20 hover:border-white/50 
    transform hover:scale-105 transition-all duration-300 
    animate-minimalistic-glow
  "
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Brochure
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-minimalistic-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-400/20 rounded-full blur-xl animate-minimalistic-float"></div>
      </section>

      {/* Property Highlights */}
      <section className="py-20 section-modern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-modern mb-6">
              Premium Villa Features
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Every aspect of Abu Hills has been crafted to provide an
              unparalleled living experience
            </p>
          </div>

          <div className="grid-modern">
            <div className="card-aesthetic group p-8 interactive-modern animate-minimalistic-scale">
              <HomeIcon className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Spacious Interiors
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Thoughtfully designed living spaces with premium finishes,
                modern amenities, and panoramic views of the surrounding hills.
              </p>
            </div>

            <div className="card-aesthetic group p-8 interactive-modern animate-minimalistic-scale">
              <Shield className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Premium Security
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                24/7 professional security services, gated community access, and
                advanced surveillance systems for complete peace of mind.
              </p>
            </div>

            <div className="card-aesthetic group p-8 interactive-modern animate-minimalistic-scale">
              <TreePine className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Natural Beauty
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Surrounded by lush landscapes and meticulously maintained
                gardens, offering a serene escape from city life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-20 section-modern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-modern mb-6">
              World-Class Amenities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Indulge in luxury with our comprehensive range of premium
              amenities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="card-modern group p-6 text-center interactive-modern animate-minimalistic-pulse"
              >
                <amenity.icon className="w-10 h-10 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-neutral-800 mb-2">
                  {amenity.name}
                </h3>
                <span className="text-sm text-emerald-600 font-medium">
                  {amenity.category}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/amenities"
              className="btn-modern inline-flex items-center px-8 py-4 text-white rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 animate-minimalistic-shimmer"
            >
              View All Amenities
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-800 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Vinayak Realty
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Ready to experience luxury living? Get in touch with our expert
              team today.
            </p>
          </div>

          <div className="grid-modern">
            <div className="card-aesthetic p-8 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl text-center animate-minimalistic-glow">
              <Phone className="w-12 h-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h3>
              <a
                href="tel:+919327586040"
                className="text-emerald-300 hover:text-emerald-200 text-lg font-semibold transition-colors"
              >
                +91-93275-860-40
              </a>
            </div>

            <div className="card-aesthetic p-8 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl text-center animate-minimalistic-glow">
              <Mail className="w-12 h-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Email Us
              </h3>
              <a
                href="mailto:info@abuhills.com"
                className="text-emerald-300 hover:text-emerald-200 text-lg font-semibold transition-colors"
              >
                info@abuhills.com
              </a>
            </div>

            <div className="card-aesthetic p-8 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl text-center animate-minimalistic-glow">
              <MapPin className="w-12 h-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Visit Us
              </h3>
              <p className="text-emerald-200 text-lg">
                Abu Hills, Premium Location
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
