import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ZoomIn,
  ZoomOut,
  X,
  Home,
  Bed,
  Bath,
  Square,
  Car,
  Maximize2,
  Building,
  Users,
  TreePine,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FloorPlan {
  id: number;
  title: string;
  image: string;
  description: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  specifications: Array<{
    icon: React.ComponentType<any>;
    label: string;
    value: string;
  }>;
}

const FloorPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 10;

  // JSON Format Floor Plans Data
  const floorPlansData: FloorPlan[] = [
    {
      id: 1,
      title: "Serenity Villa - Ground Floor",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Spacious ground floor with open living concept and modern amenities",
      area: "1320 SQ. FT",
      bedrooms: 2,
      bathrooms: 2,
      features: [
        "Open Kitchen",
        "Living Room",
        "Dining Area",
        "Guest Bathroom",
        "Storage",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1320 SQ. FT" },
        { icon: Home, label: "Living Room", value: "24x16 ft" },
        { icon: Home, label: "Kitchen", value: "12x10 ft" },
        { icon: Bath, label: "Bathrooms", value: "2 Modern" },
      ],
    },
    {
      id: 2,
      title: "Serenity Villa - First Floor",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Upper floor with private bedrooms and luxury bathrooms",
      area: "1320 SQ. FT",
      bedrooms: 3,
      bathrooms: 2,
      features: [
        "Master Suite",
        "Guest Bedrooms",
        "Walk-in Closet",
        "Balcony",
        "Study Area",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1320 SQ. FT" },
        { icon: Bed, label: "Master Bedroom", value: "16x14 ft" },
        { icon: Bed, label: "Guest Bedrooms", value: "12x12 ft" },
        { icon: Bath, label: "Bathrooms", value: "2 Luxury" },
      ],
    },
    {
      id: 3,
      title: "Harmony Villa - Ground Floor",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Contemporary ground floor with premium finishes",
      area: "1450 SQ. FT",
      bedrooms: 2,
      bathrooms: 2,
      features: [
        "Premium Kitchen",
        "Family Room",
        "Powder Room",
        "Utility Area",
        "Patio Access",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1450 SQ. FT" },
        { icon: Home, label: "Family Room", value: "26x18 ft" },
        { icon: Home, label: "Kitchen", value: "14x12 ft" },
        { icon: Bath, label: "Bathrooms", value: "2 Premium" },
      ],
    },
    {
      id: 4,
      title: "Harmony Villa - First Floor",
      image:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Elegant upper floor with panoramic views",
      area: "1450 SQ. FT",
      bedrooms: 3,
      bathrooms: 3,
      features: [
        "Master Suite",
        "Two Guest Rooms",
        "Luxury Bathrooms",
        "Terrace",
        "Dressing Room",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1450 SQ. FT" },
        { icon: Bed, label: "Master Suite", value: "18x16 ft" },
        { icon: Bed, label: "Guest Rooms", value: "14x12 ft" },
        { icon: Bath, label: "Bathrooms", value: "3 Luxury" },
      ],
    },
    {
      id: 5,
      title: "Tranquil Villa - Ground Floor",
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Spacious ground floor with garden views",
      area: "1600 SQ. FT",
      bedrooms: 2,
      bathrooms: 2,
      features: [
        "Grand Living",
        "Gourmet Kitchen",
        "Dining Room",
        "Garden Access",
        "Storage",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1600 SQ. FT" },
        { icon: Home, label: "Living Area", value: "28x20 ft" },
        { icon: Home, label: "Kitchen", value: "16x14 ft" },
        { icon: TreePine, label: "Garden View", value: "Yes" },
      ],
    },
    {
      id: 6,
      title: "Tranquil Villa - First Floor",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Premium upper floor with luxury amenities",
      area: "1600 SQ. FT",
      bedrooms: 4,
      bathrooms: 3,
      features: [
        "Master Suite",
        "Three Bedrooms",
        "Walk-in Closets",
        "Balconies",
        "Study Nook",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1600 SQ. FT" },
        { icon: Bed, label: "Bedrooms", value: "4 Spacious" },
        { icon: Bath, label: "Bathrooms", value: "3 Premium" },
        { icon: Building, label: "Balconies", value: "2 Private" },
      ],
    },
    {
      id: 7,
      title: "Bliss Villa - Ground Floor",
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Modern ground floor with open concept design",
      area: "1750 SQ. FT",
      bedrooms: 3,
      bathrooms: 2,
      features: [
        "Open Concept",
        "Island Kitchen",
        "Family Room",
        "Guest Suite",
        "Mudroom",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1750 SQ. FT" },
        { icon: Home, label: "Open Concept", value: "32x22 ft" },
        { icon: Bed, label: "Guest Suite", value: "14x12 ft" },
        { icon: Car, label: "Garage Access", value: "Direct" },
      ],
    },
    {
      id: 8,
      title: "Bliss Villa - First Floor",
      image:
        "https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Luxurious upper floor with premium features",
      area: "1750 SQ. FT",
      bedrooms: 4,
      bathrooms: 3,
      features: [
        "Master Wing",
        "Three Bedrooms",
        "Luxury Baths",
        "Loft Area",
        "Roof Access",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1750 SQ. FT" },
        { icon: Bed, label: "Master Wing", value: "20x18 ft" },
        { icon: Bath, label: "En-suite Baths", value: "3 Luxury" },
        { icon: Building, label: "Loft Space", value: "200 SQ. FT" },
      ],
    },
    {
      id: 9,
      title: "Paradise Villa - Ground Floor",
      image:
        "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Grand ground floor with entertainment areas",
      area: "1900 SQ. FT",
      bedrooms: 3,
      bathrooms: 3,
      features: [
        "Grand Foyer",
        "Entertainment Room",
        "Gourmet Kitchen",
        "Wine Cellar",
        "Patio",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1900 SQ. FT" },
        { icon: Home, label: "Entertainment", value: "24x20 ft" },
        { icon: Users, label: "Wine Cellar", value: "Premium" },
        { icon: TreePine, label: "Patio", value: "300 SQ. FT" },
      ],
    },
    {
      id: 10,
      title: "Paradise Villa - First Floor",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Magnificent upper floor with panoramic views",
      area: "1900 SQ. FT",
      bedrooms: 5,
      bathrooms: 4,
      features: [
        "Master Suite",
        "Four Bedrooms",
        "Luxury Spa Bath",
        "Private Deck",
        "Office",
      ],
      specifications: [
        { icon: Square, label: "Total Area", value: "1900 SQ. FT" },
        { icon: Bed, label: "Master Suite", value: "22x20 ft" },
        { icon: Bath, label: "Spa Bathroom", value: "Luxury" },
        { icon: Building, label: "Private Deck", value: "400 SQ. FT" },
      ],
    },
  ];

  // Pagination calculations
  const totalPages = Math.ceil(floorPlansData.length / plansPerPage);
  const startIndex = (currentPage - 1) * plansPerPage;
  const endIndex = startIndex + plansPerPage;
  const currentPlans = floorPlansData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openPlanModal = (planId: number) => {
    setSelectedPlan(planId);
    setZoomLevel(100);
  };

  const closePlanModal = () => {
    setSelectedPlan(null);
    setZoomLevel(100);
  };

  const handleZoom = (direction: "in" | "out") => {
    if (direction === "in" && zoomLevel < 200) {
      setZoomLevel((prev) => prev + 25);
    } else if (direction === "out" && zoomLevel > 50) {
      setZoomLevel((prev) => prev - 25);
    }
  };

  const downloadPlan = (plan: FloorPlan) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 800;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header
    ctx.fillStyle = "#3a9f3a";
    ctx.fillRect(0, 0, canvas.width, 100);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`Abu Hills - ${plan.title}`, canvas.width / 2, 60);

    // Plan details
    ctx.fillStyle = "#262626";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Floor Plan Details", 50, 150);

    ctx.font = "18px Arial";
    let y = 180;
    ctx.fillText(`Area: ${plan.area}`, 50, y);
    y += 30;
    ctx.fillText(`Bedrooms: ${plan.bedrooms}`, 50, y);
    y += 30;
    ctx.fillText(`Bathrooms: ${plan.bathrooms}`, 50, y);
    y += 40;

    ctx.fillText("Features:", 50, y);
    y += 30;
    plan.features.forEach((feature) => {
      ctx.fillText(`• ${feature}`, 70, y);
      y += 25;
    });

    // Floor plan outline
    ctx.strokeStyle = "#3a9f3a";
    ctx.lineWidth = 3;
    ctx.strokeRect(600, 150, 500, 400);

    // Rooms representation
    ctx.strokeStyle = "#525252";
    ctx.lineWidth = 2;
    ctx.strokeRect(620, 170, 200, 150); // Living area
    ctx.strokeRect(840, 170, 140, 100); // Kitchen
    ctx.strokeRect(620, 340, 120, 100); // Bedroom 1
    ctx.strokeRect(760, 340, 120, 100); // Bedroom 2

    ctx.fillStyle = "#525252";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Living Area", 720, 250);
    ctx.fillText("Kitchen", 910, 225);
    ctx.fillText("Bedroom", 680, 395);
    ctx.fillText("Bedroom", 820, 395);

    // Download
    const link = document.createElement("a");
    link.download = `abu-hills-${plan.title
      .toLowerCase()
      .replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const selectedPlanData = floorPlansData.find((p) => p.id === selectedPlan);

  return (
    <div className="page-bg-aesthetic">
      {/* Hero Section */}
      <section className="relative py-24 hero-modern multipage-hero">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow-modern animate-minimalistic-float"
          >
            Floor Plans
            <span className="block text-3xl md:text-4xl text-emerald-200 mt-2 font-light">
              Thoughtfully Designed Spaces
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our collection of {floorPlansData.length} meticulously
            designed villa floor plans, each crafted to provide the perfect
            blend of luxury, comfort, and functionality
          </motion.p>
        </div>
      </section>

      {/* Floor Plans Grid */}
      <section className="py-20 section-modern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-modern mb-6">
              Villa Layout Collection
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our diverse collection of floor plans, each designed
              to maximize space, natural light, and the serene beauty of Abu
              Hills
            </p>
            <div className="pagination-info mt-4">
              Showing {startIndex + 1}-
              {Math.min(endIndex, floorPlansData.length)} of{" "}
              {floorPlansData.length} floor plans
            </div>
          </motion.div>

          <div className="grid-modern">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-aesthetic overflow-hidden interactive-modern animate-minimalistic-pulse"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-emerald-500/20" />
                  <div className="absolute top-4 right-4">
                    <span className="status-modern">{plan.area}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-emerald-200 text-sm">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="bg-emerald-100 p-3 rounded-lg mb-2">
                        <Bed className="h-5 w-5 text-emerald-600 mx-auto" />
                      </div>
                      <p className="text-sm text-neutral-600">Bedrooms</p>
                      <p className="font-bold text-neutral-800">
                        {plan.bedrooms}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-rose-100 p-3 rounded-lg mb-2">
                        <Bath className="h-5 w-5 text-rose-600 mx-auto" />
                      </div>
                      <p className="text-sm text-neutral-600">Bathrooms</p>
                      <p className="font-bold text-neutral-800">
                        {plan.bathrooms}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-emerald-100 p-3 rounded-lg mb-2">
                        <Square className="h-5 w-5 text-emerald-600 mx-auto" />
                      </div>
                      <p className="text-sm text-neutral-600">Area</p>
                      <p className="font-bold text-neutral-800 text-xs">
                        {plan.area}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {plan.features.length > 3 && (
                        <span className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs">
                          +{plan.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => openPlanModal(plan.id)}
                      className="flex-1 btn-modern text-sm py-3 bg-[var(--sage-600)]"
                    >
                      <Maximize2 className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => downloadPlan(plan)}
                      className="bg-neutral-100 text-neutral-700 px-4 py-3 rounded-lg hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`pagination-button ${
                  currentPage === page ? "active" : ""
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>

      {/* Floor Plan Modal */}
      <AnimatePresence>
        {selectedPlan && selectedPlanData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-perfect"
            onClick={closePlanModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modal-content-perfect max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="grid justify-between items-center mb-6 sm:flex">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800">
                      {selectedPlanData.title}
                    </h3>
                    <p className="text-neutral-600">
                      {selectedPlanData.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleZoom("out")}
                      className="p-2 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                      disabled={zoomLevel <= 50}
                    >
                      <ZoomOut className="h-4 w-4" />
                    </button>
                    <span className="text-sm text-neutral-600 min-w-[60px] text-center font-medium">
                      {zoomLevel}%
                    </span>
                    <button
                      onClick={() => handleZoom("in")}
                      className="p-2 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                      disabled={zoomLevel >= 200}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    <button
                      onClick={closePlanModal}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Perfect Image Display */}
                  <div className="lg:col-span-2">
                    <div className="modal-image-container rounded-xl">
                      <img
                        src={selectedPlanData.image}
                        alt={selectedPlanData.title}
                        className="modal-image-perfect"
                        style={{
                          transform: `scale(${zoomLevel / 100})`,
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      {selectedPlanData.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-emerald-50 rounded-xl"
                        >
                          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                            <spec.icon className="h-6 w-6 text-emerald-600" />
                          </div>
                          <p className="text-sm text-neutral-600 mb-1">
                            {spec.label}
                          </p>
                          <p className="font-bold text-neutral-800">
                            {spec.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-800 mb-3">
                        All Features:
                      </h4>
                      <div className="space-y-2">
                        {selectedPlanData.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-neutral-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => downloadPlan(selectedPlanData)}
                      className="w-full btn-modern"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Floor Plan</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Experience These Spaces?
            </h2>
            <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a personal tour of Abu Hills and walk through these
              beautifully designed villa layouts
            </p>
            <button className="btn-modern text-lg px-8 py-4">
              <Car className="h-5 w-5" />
              <span>Schedule Site Visit</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FloorPlans;
