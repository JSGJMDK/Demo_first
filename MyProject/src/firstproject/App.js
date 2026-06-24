import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Layout, LineChart as ChartIcon, Globe, Database, ArrowRight, CheckCircle } from 'lucide-react';

// Mock Data for the Analytics Demo
const data = [
  { name: 'Mon', visits: 400, conversions: 24 },
  { name: 'Tue', visits: 300, conversions: 18 },
  { name: 'Wed', visits: 600, conversions: 45 },
  { name: 'Thu', visits: 800, conversions: 56 },
  { name: 'Fri', visits: 500, conversions: 32 },
  { name: 'Sat', visits: 900, conversions: 80 },
  { name: 'Sun', visits: 700, conversions: 50 },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <Layout size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">NEXUS <span className="text-indigo-600">INSIGHT</span></span>
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="#demo" className="hover:text-indigo-600 transition">Live Demo</a>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="px-10 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          We build websites that <span className="text-indigo-600">track themselves.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10">
          Nexus Insight Studio combines high-end web development with deep data analytics to turn your visitors into customers.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-800 transition">
            Start Your Project <ArrowRight size={20} />
          </button>
        </div>
      </header>

      {/* --- LIVE DEMO SECTION (Showing off Data Skills) --- */}
      <section id="demo" className="px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-8 shadow-2xl text-white">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Live Insight Dashboard</h2>
            <p className="text-slate-400">This is a preview of the custom analytics we integrate into every site.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-slate-400 text-sm font-bold uppercase mb-4">Weekly Traffic</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none'}} />
                    <Bar dataKey="visits" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-slate-400 text-sm font-bold uppercase mb-4">Conversion Trends</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none'}} />
                    <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <p className="text-indigo-400 text-sm font-bold tracking-widest">INSIGHT</p>
                <p className="text-xl font-semibold">Saturday saw an 80% jump in conversions. Recommend increasing ad spend on weekends.</p>
              </div>
              <button className="w-full py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-500 transition">
                Unlock Full Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="px-10 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600">
              <Globe size={28} />
            </div>
            <h2 className="text-4xl font-bold">Modern Web Development</h2>
            <p className="text-slate-600 text-lg">We build lightning-fast sites using React and Next.js. Every site is optimized for SEO and accessibility from day one.</p>
            <ul className="space-y-3">
              {['Responsive Design', 'E-commerce Ready', 'Custom CMS Integration'].map((item) => (
                <li key={item} className="flex items-center gap-2 font-medium">
                  <CheckCircle size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-600">
              <Database size={28} />
            </div>
            <h2 className="text-4xl font-bold">Data Analytics</h2>
            <p className="text-slate-600 text-lg">Don't just look at numbers. Understand them. We set up professional data pipelines to track every click.</p>
            <ul className="space-y-3">
              {['User Behavior Heatmaps', 'Conversion Funnel Analysis', 'Custom ROI Dashboards'].map((item) => (
                <li key={item} className="flex items-center gap-2 font-medium">
                  <CheckCircle size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-10 text-center">
        <p>© 2024 Nexus Insight Studio. All data encrypted and secured.</p>
      </footer>
    </div>
  );
};

export default App;