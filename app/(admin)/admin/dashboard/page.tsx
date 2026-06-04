'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Users, BookOpen, Image as ImageIcon, Settings, LogOut, LayoutDashboard, Plus, Upload, Trash2, Edit } from 'lucide-react';

const MENU_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'students', icon: Users, label: 'Manage Students' },
  { id: 'certificates', icon: Upload, label: 'Certificates Data' },
  { id: 'courses', icon: BookOpen, label: 'Manage Courses' },
  { id: 'gallery', icon: ImageIcon, label: 'Gallery Images' },
  { id: 'content', icon: Settings, label: 'Website Content' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-charcoal text-white flex flex-col hidden md:flex shrink-0">
        <div className="p-6 border-b border-gray-800">
           <h2 className="font-playfair text-xl font-bold text-rosegold-light tracking-wide">
             AS BEAUTY
           </h2>
           <p className="text-xs text-gray-400 mt-1">Admin Portal</p>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
           <nav className="space-y-1 px-3">
             {MENU_ITEMS.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setActiveTab(item.id)}
                 className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                   activeTab === item.id 
                     ? 'bg-rosegold text-white' 
                     : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                 }`}
               >
                 <item.icon size={18} />
                 {item.label}
               </button>
             ))}
           </nav>
        </div>
        <div className="p-4 border-t border-gray-800">
           <Link href="/" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
             <LogOut size={16} /> Logout
           </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center shrink-0">
           <h1 className="text-xl font-semibold text-gray-800 capitalize">
              {MENU_ITEMS.find(m => m.id === activeTab)?.label}
           </h1>
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-rosegold/20 text-rosegold flex items-center justify-center font-bold">
               A
             </div>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
           
           {activeTab === 'dashboard' && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-rosegold">
                  <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">1,248</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-charcoal">
                  <h3 className="text-gray-500 text-sm font-medium">Active Courses</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-green-500">
                  <h3 className="text-gray-500 text-sm font-medium">Certificates Issued</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">892</p>
                </div>
             </div>
           )}

           {activeTab === 'students' && (
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                   <h3 className="font-semibold text-gray-800">Student Directory</h3>
                   <button className="flex items-center gap-2 bg-rosegold text-white px-4 py-2 rounded-lg text-sm hover:bg-rosegold-dark">
                     <Plus size={16} /> Add Student
                   </button>
                </div>
                <div className="p-8 text-center text-gray-500 flex flex-col items-center justify-center min-h-[300px]">
                   <Users size={48} className="text-gray-300 mb-4" />
                   <p>Student management interface placeholder.</p>
                   <p className="text-sm mt-2">Here you would see a table allowing you to Edit and Delete students.</p>
                </div>
             </div>
           )}

           {activeTab === 'certificates' && (
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                   <h3 className="font-semibold text-gray-800">Certificate Records</h3>
                   <button className="flex items-center gap-2 bg-charcoal text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
                     <Upload size={16} /> Bulk Upload CSV
                   </button>
                </div>
                <div className="p-8 text-center text-gray-500 min-h-[300px] flex items-center justify-center">
                   <p>Upload certificate data to allow verification on the frontend.</p>
                </div>
             </div>
           )}

           {['courses', 'gallery', 'content'].includes(activeTab) && (
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center text-gray-500 min-h-[400px] flex items-center justify-center">
                <p>CMS Management Interface for {activeTab}. Configuration panels will appear here.</p>
             </div>
           )}

        </main>
      </div>
    </div>
  );
}
