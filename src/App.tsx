import {
  Building2,
  ChevronDown,
  FileCheck,
  Menu,
  Moon,
  Shield,
  Sun,
  Terminal,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 dark:bg-[#0A1A2F] text-gray-900 dark:text-gray-100 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-[#0A1A2F]/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex items-center">
                <Terminal className="text-[#00FF9D]" size={28} />
                <span className="ml-2 text-xl font-bold font-['Orbitron']">
                  TechticianServices
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#services"
                  className="hover:text-[#00FF9D] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="hover:text-[#00FF9D] transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#00FF9D] transition-colors"
                >
                  Contact
                </a>
                <div className="relative">
                  <button
                    onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}
                    className="flex items-center hover:text-[#00FF9D] transition-colors"
                  >
                    Capabilities
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {appsDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2">
                      <a
                        href="#services"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        IT Solutions
                      </a>
                      <a
                        href="#services"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Technical Services
                      </a>
                      <a
                        href="#services"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Infrastructure Support
                      </a>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors mr-2"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#services"
                  className="block py-2 hover:text-[#00FF9D] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block py-2 hover:text-[#00FF9D] transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="block py-2 hover:text-[#00FF9D] transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#services"
                  className="block py-2 hover:text-[#00FF9D] transition-colors"
                >
                  Capabilities
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <Terminal className="text-[#00FF9D]" size={64} />
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold font-['Orbitron'] mb-6 glitch-text">
                  From Technical Expertise to Government Solutions
                </h1>
                <p className="text-xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-400">
                  Certified • Reliable • SAM.gov Registered
                </p>
                <p className="max-w-2xl mx-auto text-lg mb-12 text-gray-600 dark:text-gray-400">
                  We are a veteran-owned primary contractor specializing in
                  technical services and solutions for government contracts.
                  From IT infrastructure to specialized technical services, we
                  deliver excellence through strategic subcontracting and direct
                  1099 expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF007A] hover:bg-[#FF007A]/90 transition-colors"
                  >
                    Request Quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-3 border border-[#00FF9D] text-base font-medium rounded-md text-[#00FF9D] hover:bg-[#00FF9D]/10 transition-colors"
                  >
                    View Capabilities
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <section
            id="services"
            className="py-20 bg-gray-50 dark:bg-[#0A1A2F]/50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-['Orbitron'] mb-4">
                  Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Comprehensive technical solutions for federal, state, and
                  local government contracts with proven delivery excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* IT Solutions */}
                <div className="relative group bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="relative">
                    <Wrench className="text-[#00FF9D] mb-4" size={48} />
                    <h3 className="text-xl font-bold mb-4 font-['Orbitron']">
                      IT Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Complete IT infrastructure and support services for
                      government operations and facilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Network Infrastructure
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Systems Integration
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Hardware & Software
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Technical Support
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Services */}
                <div className="relative group bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="relative">
                    <Shield className="text-[#00FF9D] mb-4" size={48} />
                    <h3 className="text-xl font-bold mb-4 font-['Orbitron']">
                      Technical Services
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Specialized technical expertise for complex government
                      projects and security requirements.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Cybersecurity Implementation
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Compliance & Auditing
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Technical Consulting
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Project Management
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Infrastructure Support */}
                <div className="relative group bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="relative">
                    <Building2 className="text-[#00FF9D] mb-4" size={48} />
                    <h3 className="text-xl font-bold mb-4 font-['Orbitron']">
                      Infrastructure Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Versatile contracting solutions for facilities,
                      maintenance, and operational support services.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Facilities Management
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Equipment Services
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Maintenance Programs
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] mr-2" />
                        Operational Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold font-['Orbitron'] mb-6">
                    Veteran-Owned, Contract-Ready
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    With years of technical operations experience in the U.S.
                    Navy and SAM.gov certification, TechticianServices brings
                    military precision and technical excellence to government
                    contracting. We are a registered primary contractor with the
                    capability to manage complex projects through strategic
                    subcontracting partnerships.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Our mission is to deliver versatile, high-quality technical
                    solutions across all contract types. Whether it's direct
                    1099 work or multi-tier subcontracting, we maintain the
                    flexibility and expertise to meet any government requirement
                    with proven reliability.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
                      <FileCheck className="text-[#00FF9D] mb-2" size={32} />
                      <span className="text-sm font-semibold">
                        SAM.gov Certified
                      </span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
                      <Shield className="text-[#00FF9D] mb-2" size={32} />
                      <span className="text-sm font-semibold">
                        Veteran Owned
                      </span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
                      <Users className="text-[#00FF9D] mb-2" size={32} />
                      <span className="text-sm font-semibold">
                        Prime Contractor
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/20 to-[#FF007A]/20 rounded-lg" />
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                    alt="Technology and connectivity"
                    className="rounded-lg shadow-2xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-20 bg-gray-50 dark:bg-[#0A1A2F]/50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-['Orbitron'] mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Ready to discuss your government contract needs? Let's explore
                  how we can deliver technical excellence for your project.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-8">
                <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
                  <div className="text-center mb-6">
                    <Terminal
                      className="text-[#00FF9D] mx-auto mb-4"
                      size={48}
                    />
                    <h3 className="text-xl font-bold mb-2">Request a Quote</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Contact us to discuss your contract requirements and
                      receive a detailed proposal.
                    </p>
                    <div className="space-y-4">
                      <a
                        href="mailto:techticianservices@proton.me"
                        className="block w-full px-6 py-3 bg-[#00FF9D] text-gray-900 rounded-lg hover:bg-[#00FF9D]/90 transition-colors font-bold"
                      >
                        Email Us
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        SAM.gov UEI Available Upon Request
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <Terminal className="text-[#00FF9D]" size={28} />
                  <span className="ml-2 text-xl font-bold font-['Orbitron']">
                    TechticianServices
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Delivering technical excellence to government contracts
                  nationwide. SAM.gov registered primary contractor.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Veteran-owned business. All rights reserved © 2025
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#services"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#00FF9D] transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#00FF9D] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#00FF9D] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Capabilities</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-400">
                    IT Solutions
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Technical Services
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Infrastructure Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    1099 Contracting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
