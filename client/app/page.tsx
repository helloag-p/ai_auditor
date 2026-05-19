"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiFileText,
  FiMail,
  FiGlobe,
  FiBriefcase,
  FiUser,
  FiAtSign,
} from "react-icons/fi";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState("");
  const [pdfUrl, setPdfUrl] =
  useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess(false);

      setStep("Analyzing company footprint");

      setTimeout(() => {
        setStep("Generating AI insights & strategy");
      }, 2000);

      setTimeout(() => {
        setStep("Compiling executive PDF report");
      }, 4000);

      setTimeout(() => {
        setStep("Dispatching personalized outreach");
      }, 6000);

      const response = await axios.post(
  `${process.env.NEXT_PUBLIC_URL}/api/leads`,
  formData
);

      toast.success(response.data.message || "Audit completed successfully!");
      setSuccess(true);
      setPdfUrl(
  `${process.env.NEXT_PUBLIC_URL}/${response.data.pdfPath}`
);

      setFormData({
        name: "",
        email: "",
        companyName: "",
        website: "",
      });
    } catch (error) {
      toast.error("Workflow failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-indigo-500/30">
      <Toaster
        toastOptions={{
          style: {
            background: "#1e1e24",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      {/* Modern Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              <FiCpu className="animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Next-Gen Lead Automation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Turn Website Leads Into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                Personalized AI Audits
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
              Automatically analyze businesses, generate actionable AI strategies,
              compile executive PDFs, and deliver personalized outreach the moment they convert.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 mt-24 items-start max-w-6xl mx-auto">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative group"
            >
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative bg-[#0a0a0a]/80 border border-white/10 rounded-[2rem] p-8 backdrop-blur-2xl shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Request Audit</h2>
                  <p className="text-gray-400 text-sm">Experience the automated workflow in action.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <FiAtSign />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <FiBriefcase />
                    </div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <FiGlobe />
                    </div>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25 mt-6 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Initializing...
                      </span>
                    ) : (
                      <>
                        Generate AI Audit
                        <FiArrowRight />
                      </>
                    )}
                  </button>
                  
                </form>
                

                {/* Status Indicators */}
                <AnimatePresence mode="wait">
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                          <span>System Status</span>
                          <span className="text-indigo-400 animate-pulse">Processing</span>
                        </div>
                        <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 8, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                          />
                        </div>
                        <p className="mt-3 text-sm text-indigo-200 flex items-center gap-2">
                          <FiCpu className="animate-spin-slow" />
                          {step}
                        </p>
                      </div>
                    </motion.div>
                  )}

                 {success && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4"
  >
    <div className="flex items-start gap-3">
      <FiCheckCircle className="text-emerald-400 text-xl mt-0.5" />

      <div>
        <h3 className="font-medium text-emerald-300">
          Audit Delivered Successfully
        </h3>

        <p className="text-emerald-400/70 text-sm mt-1">
          The personalized report has been sent to the prospect's inbox.
        </p>

        {
          pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02]"
            >
              <FiFileText />
              Download Report
            </a>
          )
        }

      </div>
    </div>
  </motion.div>
)}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Features Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 space-y-6 flex flex-col justify-center h-full"
            >
              {[
                {
                  icon: <FiCpu />,
                  title: "AI Company Research",
                  desc: "Automatically analyzes business websites, extracts core company insights, and generates contextual data points in seconds.",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10",
                },
                {
                  icon: <FiFileText />,
                  title: "Professional PDF Reports",
                  desc: "Generate stunning executive-level audit documents complete with SEO metrics, UX breakdowns, and actionable growth strategies.",
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                },
                {
                  icon: <FiMail />,
                  title: "Automated Outreach",
                  desc: "Bypass the manual follow-up. Deliver highly personalized business reports directly to your leads instantly after submission.",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-[#0a0a0a]/50 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div className="flex gap-5">
                    <div className={`shrink-0 w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center ${feature.color} text-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white/90 group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}