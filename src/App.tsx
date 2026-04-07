/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Users,
  Calendar, 
  Activity,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Star,
  Send,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface Achievement {
  year: string;
  title: string;
  organization: string;
}

// --- Constants ---
const TREATMENTS: Treatment[] = [
  { id: 'manual', title: 'Manual Therapy', description: 'Hands-on techniques to mobilize joints and soft tissues for pain relief.', icon: <Activity className="w-6 h-6" /> },
  { id: 'laser', title: 'Laser Therapy', description: 'Advanced cold laser treatment for rapid tissue healing and inflammation.', icon: <Activity className="w-6 h-6" /> },
  { id: 'back', title: 'Back & Neck Pain', description: 'Specialized care for slip disc, cervical spondylosis, and chronic pain.', icon: <Activity className="w-6 h-6" /> },
  { id: 'stroke', title: 'Stroke Rehab', description: 'Comprehensive neurological rehabilitation to regain motor functions.', icon: <Activity className="w-6 h-6" /> },
  { id: 'sports', title: 'Sports & Fitness', description: 'Injury prevention and recovery programs for athletes.', icon: <Activity className="w-6 h-6" /> },
  { id: 'home', title: 'Home Visit', description: 'Professional physiotherapy services in the comfort of your home.', icon: <Activity className="w-6 h-6" /> },
  { id: 'pregnancy', title: 'Pregnancy Fitness', description: 'Safe exercise programs for pre and post-natal wellness.', icon: <Activity className="w-6 h-6" /> },
  { id: 'weight', title: 'Weight Reduction', description: 'Scientific approach to weight management and core training.', icon: <Activity className="w-6 h-6" /> },
  { id: 'haemophilia', title: 'Haemophilia Care', description: 'Specialized physical therapy for haemophilia patients since 2008.', icon: <Activity className="w-6 h-6" /> },
];

const ACHIEVEMENTS: Achievement[] = [
  { year: '2005', title: '1st Rank in University', organization: 'Veer Narmad South Gujarat University' },
  { year: '2005', title: 'Moosaji D. Lockhat Gold Medal', organization: 'Sarvajanik College of Physiotherapy' },
  { year: '2004', title: 'Student Welfare Fund gold medal', organization: 'Academic Excellence' },
  { year: '2017', title: 'Germany Musculoskeletal Research', organization: 'Selected for Research Program' },
  { year: '2015', title: 'Appreciation Certificate', organization: 'Surat Physio Club (PHYSIOTSAV\'15)' },
];

const WORKSHOPS = [
  "Mulligan Concept Manual Therapy (Capri Institute)",
  "Trigger Point Dry Needling (PRIDE Institute, Delhi)",
  "Kinesiology Taping Therapy (IRWA, Singapore)",
  "NDT in Cerebral Palsy & Neuro Disorders",
  "Osteo Arthritis Management (Johnson & Johnson)",
  "Recent Advances in LASER Therapy (IAP)"
];

const GALLERY = [
  { url: 'https://picsum.photos/seed/maulik-1/800/600', title: 'Clinical Practice' },
  { url: 'https://picsum.photos/seed/maulik-2/800/600', title: 'Workshop Presentation' },
  { url: 'https://picsum.photos/seed/maulik-3/800/600', title: 'Award Ceremony' },
  { url: 'https://picsum.photos/seed/maulik-4/800/600', title: 'Community Service' },
  { url: 'https://picsum.photos/seed/maulik-5/800/600', title: 'Patient Care' },
  { url: 'https://picsum.photos/seed/maulik-6/800/600', title: 'Clinic Interior' },
];

const HEALTH_TIPS = [
  { title: 'Stand up from a chair on one leg', type: 'Challenge', description: 'A simple test for lower body strength and balance.' },
  { title: 'How to lift objects safely', type: 'Guide', description: 'Correct posture to avoid back pain while lifting heavy items.' },
  { title: 'Top 10 Exercises for Women', type: 'Fitness', description: 'Essential daily exercises for overall health and core strength.' },
];

const STATS = [
  { label: 'Years Experience', value: '20+' },
  { label: 'Happy Patients', value: '15k+' },
  { label: 'Gold Medals', value: '2' },
  { label: 'Success Rate', value: '98%' },
];

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleWhatsApp = () => {
    const url = `https://wa.me/919824108209?text=${encodeURIComponent(message || 'Hello Dr. Maulik, I have a query regarding physiotherapy.')}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-80 mb-4 overflow-hidden"
          >
            <div className="bg-indigo-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Sparsh Support</h4>
                  <p className="text-xs text-indigo-100">Online • Usually replies in 15m</p>
                </div>
              </div>
              <p className="text-sm text-indigo-50">Hello! How can we help you today with your recovery?</p>
            </div>
            <div className="p-4 bg-slate-50">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your query here..."
                className="w-full p-4 rounded-2xl bg-white border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-600 outline-none transition-all resize-none h-24"
              />
              <button 
                onClick={handleWhatsApp}
                className="w-full mt-3 bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-indigo-600 text-white hover:scale-110'}`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </button>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Activity className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-indigo-950 leading-none">SPARSH</span>
              <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase">Physiotherapy</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Treatments', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Home', 'About', 'Treatments', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Sunset Background Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-indigo-50/30 to-slate-100/50" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-200">
                <Award className="w-4 h-4" /> University 1st Rank & Gold Medallist
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Expert Care by <br />
                <span className="text-indigo-600">Dr. Maulik Patel</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Clinical Physiotherapist with 20+ years of experience. Specializing in advanced pain management, stroke rehab, and sports recovery.
              </p>
              
              {/* Quick Info Box - Refined from user image */}
              <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-[32px] shadow-xl shadow-indigo-100/20 mb-8 max-w-md">
                <ul className="space-y-3">
                  {[
                    "Graduated from Sarvajanik College (2005)",
                    "Owner of Sparsh Physiotherapy Clinic, City Light",
                    "Connected with Surat Haemophilia Society since 2007",
                    "HOD of Physiotherapy at Bombay Multi-speciality Hospital"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-2">
                  Book Appointment <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  View Treatments
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-[4/5]">
                {/* 
                  CRITICAL: Replace the URL below with the actual path of Dr. Patel's photo in a suit.
                  Example: src="/dr-maulik-suit.jpg"
                */}
                <img 
                  src="https://static.wixstatic.com/media/61e207_d1cda2119fd249e787677dd9652d2313~mv2.png/v1/fill/w_849,h_1219,al_c,q_90,enc_avif,quality_auto/20200101202231_IMG_8615_edited_edited_pn.png" 
                  alt="Dr. Maulik Patel" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-indigo-300 font-bold text-sm uppercase tracking-widest mb-1">Founder & HOD</p>
                  <h3 className="text-3xl font-bold">Dr. Maulik B. Patel</h3>
                  <p className="text-indigo-100/80 font-medium">(B.P.T., MIAP) Gold Medallist</p>
                </div>
              </div>
              
              {/* Floating Badge - Refined with small profile circle */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-[32px] shadow-2xl z-20 hidden sm:block border border-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100">
                    <img src="https://picsum.photos/seed/maulik-mini/100/100" alt="Dr. Patel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-black text-indigo-600 leading-none">20+</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Years Experience</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Clinical Expert</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="text-4xl font-extrabold text-indigo-600">{stat.value}</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight w-20">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* NOTE: Replace with uploaded photos of Dr. Patel speaking/working */}
                <img src="https://picsum.photos/seed/maulik-speaking/400/600" alt="Dr. Maulik Patel Speaking" className="rounded-3xl shadow-lg mt-12" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/maulik-clinic/400/600" alt="Dr. Maulik Patel in Clinic" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-2xl hidden sm:block">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Education</p>
                <p className="font-bold text-lg leading-tight">University 1st Rank <br />Veer Narmad University</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Professional Profile</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                A Legacy of Academic Excellence & <span className="text-indigo-600">Clinical Expertise</span>.
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Dr. Maulik Patel graduated with distinction from Sarvajanik College of Physiotherapy in 2005. His academic journey was marked by consistent excellence, securing the 1st rank in the university and multiple gold medals.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Academic Honors</h4>
                    <p className="text-sm text-slate-600">Moosaji D. Lockhat Gold Medal & Student Welfare Fund Gold Medalist.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Clinical Leadership</h4>
                    <p className="text-sm text-slate-600">HOD of Physiotherapy at Bombay Multi-speciality Hospital & Surbhi Polyclinic.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Community Service</h4>
                    <p className="text-sm text-slate-600">Dedicated service to the Surat Haemophilia Society since 2007.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Previous Experience</p>
                <p className="text-sm text-slate-700 font-medium">
                  Shree Mahavir General Hospital • Smimmer Hospital • Sheth P.T. General Hospital • Burhani Hospital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Hemophilia Care Section --- */}
      <section className="py-24 bg-indigo-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Specialized Service</h2>
              <h3 className="text-4xl font-bold mb-6">Work in Hemophilia Field</h3>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Dr. Maulik Patel has been a dedicated carrier in the haemophilia field since 2008. He has attended specialized training programs at Christian Medical College, Vellore, and has been recognized by the Haemophilia Society (Surat Chapter) multiple times for his outstanding contributions.
              </p>
              
              <div className="space-y-4">
                {[
                  "Working with haemophilia patients since 2008",
                  "Attended physical therapy training at CMC, Vellore",
                  "Awarded by Haemophilia Society in 2008, 2010, 2011, and 2013",
                  "Selected for Germany Musculoskeletal Research program in 2017"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-indigo-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-10 bg-white text-indigo-950 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all">
                Learn More About Hemophilia Care
              </button>
            </div>
            
            <div className="rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10">
              <img src="https://picsum.photos/seed/hemophilia/800/600" alt="Hemophilia Workshop" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Treatments Section --- */}
      <section id="treatments" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Specializations</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Treatment Solutions</h3>
            <p className="text-slate-600">
              From manual therapy to advanced laser treatments, we provide evidence-based care tailored to your specific recovery needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{item.description}</p>
                <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 group/btn">
                  Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Health Tips & Videos --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Health & Wellness</h2>
              <h3 className="text-4xl font-bold text-slate-900">Physiotherapy Tips & Challenges</h3>
            </div>
            <button className="text-indigo-600 font-bold flex items-center gap-2 group">
              View All Tips <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {HEALTH_TIPS.map((tip, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[32px] overflow-hidden mb-6 shadow-lg">
                  <img src={`https://picsum.photos/seed/tip-${i}/600/400`} alt={tip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-indigo-600 shadow-xl group-hover:scale-110 transition-transform">
                      <Youtube className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {tip.type}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{tip.title}</h4>
                <p className="text-slate-500 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Visual Journey</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Clinic Gallery</h3>
            <p className="text-slate-600">Take a look at our facilities and Dr. Maulik Patel's professional engagements.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {GALLERY.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-[32px] overflow-hidden shadow-md group"
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Video Section --- */}
      <section className="py-24 bg-indigo-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10 group">
              {/* 
                CRITICAL: Replace the URL below with the actual path of Dr. Patel's video.
                Example: src="/dr-maulik-intro.mp4"
              */}
              <img 
                src="https://picsum.photos/seed/video-placeholder/1280/720" 
                alt="Dr. Maulik Patel Video" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Youtube className="w-12 h-12" />
                </button>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-300 mb-1">Featured Video</p>
                <h4 className="text-2xl font-bold">Introduction to Sparsh Physiotherapy</h4>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Patient Education</h2>
              <h3 className="text-4xl font-bold mb-6">Learn About Your Recovery</h3>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Watch Dr. Maulik Patel explain common conditions and demonstrate safe exercises you can perform at home to accelerate your healing process.
              </p>
              <div className="space-y-6">
                {[
                  "Understanding Slip Disc & Sciatica",
                  "Post-Stroke Rehabilitation Exercises",
                  "Sports Injury Prevention Techniques",
                  "Daily Core Strengthening for Women"
                ].map((video, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{video}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Achievements & Workshops --- */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Milestones</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-10">Awards & Recognition</h3>
              
              <div className="space-y-8">
                {ACHIEVEMENTS.map((ach, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="text-2xl font-black text-indigo-200 w-16">{ach.year}</div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-900 text-lg">{ach.title}</h4>
                      <p className="text-slate-500 text-sm">{ach.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-950 rounded-[48px] p-10 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
              <h3 className="text-3xl font-bold mb-8 relative z-10">Workshops & Training</h3>
              <div className="grid sm:grid-cols-1 gap-4 relative z-10">
                {WORKSHOPS.map((workshop, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-indigo-100">{workshop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[48px] shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-20 bg-indigo-600 text-white">
                <h3 className="text-4xl font-bold mb-8">Book Your Visit</h3>
                <p className="text-indigo-100 mb-12">Visit our modern clinic or request a home visit for personalized care.</p>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Main Clinic Address</h4>
                      <p className="text-indigo-100 text-sm">248, 2nd Floor, Marvella Corridor, <br />Surat, Gujarat</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Call for Appointment</h4>
                      <p className="text-indigo-100 text-sm">+91 9824108209</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Clinic Hours</h4>
                      <p className="text-indigo-100 text-sm">Mon - Sat: 9:00 AM - 1:00 PM <br />& 4:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 lg:p-20">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
                    <input type="tel" placeholder="Mobile Number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
                  </div>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all appearance-none">
                    <option>Select Treatment</option>
                    {TREATMENTS.map(t => <option key={t.id}>{t.title}</option>)}
                  </select>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
                    <input type="time" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
                  </div>
                  <textarea rows={3} placeholder="Additional Comments" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all resize-none" />
                  <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                    Book Appointment Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Activity className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">SPARSH <span className="text-indigo-500">PHYSIO</span></span>
              </div>
              <p className="text-sm leading-relaxed mb-8">
                Providing super-specialized physiotherapy care where pain ends and healing begins. Led by University Gold Medallist Dr. Maulik Patel.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube, MessageSquare].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {['Home', 'About Us', 'Treatments', 'Achievements', 'Contact'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Specializations</h4>
              <ul className="space-y-4 text-sm">
                {['Stroke Rehabilitation', 'Manual Therapy', 'Laser Therapy', 'Haemophilia Care', 'Sports Injury'].map(item => (
                  <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  <span>+91 9824108209</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-500" />
                  <span>info@sparshphysio.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  <span>Marvella Corridor, Surat</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
            <p>© 2024 Sparsh Physiotherapy & Fitness Center. All rights reserved.</p>
            <p>Designed for <span className="text-white">Dr. Maulik Patel</span></p>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
