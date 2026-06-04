'use client';
import { useState, useEffect } from 'react';
import { LogOut, Plus, Search, Edit2, Trash2, Shield } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Certificate, getCertificatesFromStorage, saveCertificatesToStorage } from '@/lib/certificates';

export default function CertificateManagement() {
  const router = useRouter();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [search, setSearch] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);
  
  // Form state
  const [formData, setFormData] = useState<Partial<Certificate>>({});

  useEffect(() => {
    setCertificates(getCertificatesFromStorage());
  }, []);

  const handleSave = () => {
    saveCertificatesToStorage(certificates);
  };

  useEffect(() => {
    if (certificates.length > 0) {
      handleSave();
    }
  }, [certificates]);

  const filteredCerts = certificates.filter(
    (c) =>
      c.studentName.toLowerCase().includes(search.toLowerCase()) ||
      c.phoneNumber.includes(search) ||
      c.certNumber.toLowerCase().includes(search.toLowerCase()) ||
      c.course.toLowerCase().includes(search.toLowerCase())
  );

  const openNewModal = () => {
    setEditingCert(null);
    setFormData({
      studentName: '',
      phoneNumber: '',
      course: '',
      certNumber: '',
      date: new Date().toISOString().split('T')[0]
    });
    setIsModalOpen(true);
  };

  const openEditModal = (cert: Certificate) => {
    setEditingCert(cert);
    setFormData(cert);
    setIsModalOpen(true);
  };

  const deleteCert = (id: string) => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      const updated = certificates.filter(c => c.id !== id);
      setCertificates(updated);
      saveCertificatesToStorage(updated);
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phoneNumber || !formData.course) return;

    if (editingCert) {
      const updated = certificates.map(c => c.id === editingCert.id ? { ...c, ...formData } as Certificate : c);
      setCertificates(updated);
      saveCertificatesToStorage(updated);
    } else {
      const newCert: Certificate = {
        ...formData,
        id: Date.now().toString(),
        certNumber: formData.certNumber || `ASB-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
      } as Certificate;
      const updated = [...certificates, newCert];
      setCertificates(updated);
      saveCertificatesToStorage(updated);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 md:px-8">
      {/* Header aligned like the provided image */}
      <div className="w-full max-w-6xl flex justify-between items-end mb-8 pt-6">
         <div>
            <div className="flex items-center gap-2 text-rosegold font-semibold tracking-widest text-sm uppercase mb-2">
               <Shield size={16} /> Admin Portal
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#5c4033]">
              Certificate Management
            </h1>
         </div>
         <div className="flex gap-4">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium shadow-sm"
            >
              <LogOut size={18} /> Logout
            </button>
            <button 
              onClick={openNewModal}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#5c4033] text-white hover:bg-[#4a3329] transition-colors font-medium shadow-sm"
            >
              <Plus size={18} /> Issue New Certificate
            </button>
         </div>
      </div>

      {/* Search & Stats Bar */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 flex justify-between items-center">
         <div className="relative w-full max-w-md">
           <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
           <input 
             type="text"
             placeholder="Search by name, phone, or cert ID..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:outline-none focus:ring-1 focus:ring-rosegold transition-all"
           />
         </div>
         <div className="text-gray-500 font-medium px-4">
           Total Records: {certificates.length}
         </div>
      </div>

      {/* Data Table */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-5 px-6 font-bold text-gray-500 text-xs tracking-wider uppercase">Student Identity</th>
                  <th className="py-5 px-6 font-bold text-gray-500 text-xs tracking-wider uppercase">Phone Number</th>
                  <th className="py-5 px-6 font-bold text-gray-500 text-xs tracking-wider uppercase">Course</th>
                  <th className="py-5 px-6 font-bold text-gray-500 text-xs tracking-wider uppercase">Cert. Number</th>
                  <th className="py-5 px-6 font-bold text-gray-500 text-xs tracking-wider uppercase">Date</th>
                  <th className="py-5 px-6 font-bold text-gray-500 text-xs tracking-wider uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCerts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500">
                       No certificates found.
                    </td>
                  </tr>
                ) : (
                  filteredCerts.map((cert) => (
                    <tr key={cert.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-900">{cert.studentName}</td>
                      <td className="py-4 px-6 text-gray-600">{cert.phoneNumber}</td>
                      <td className="py-4 px-6 text-gray-600">{cert.course}</td>
                      <td className="py-4 px-6 text-rosegold font-medium text-sm tracking-wide">{cert.certNumber}</td>
                      <td className="py-4 px-6 text-gray-600">{cert.date}</td>
                      <td className="py-4 px-6 flex justify-end gap-3">
                        <button 
                          onClick={() => openEditModal(cert)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button 
                          onClick={() => deleteCert(cert.id)}
                          className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
         </div>
      </div>

      {/* Edit / Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="p-6 border-b border-gray-100">
                <h2 className="font-playfair text-2xl font-bold text-gray-900">
                  {editingCert ? 'Edit Certificate' : 'Issue New Certificate'}
                </h2>
             </div>
             <form onSubmit={submitForm} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                  <input required type="text" value={formData.studentName || ''} onChange={e => setFormData({...formData, studentName: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" value={formData.phoneNumber || ''} onChange={e => setFormData({...formData, phoneNumber: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                  <input required type="text" value={formData.course || ''} onChange={e => setFormData({...formData, course: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Number (Optional)</label>
                  <input type="text" placeholder="Auto-generated if blank" value={formData.certNumber || ''} onChange={e => setFormData({...formData, certNumber: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
                  <input required type="date" value={formData.date || ''} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold" />
                </div>
                <div className="flex justify-end gap-3 pt-6">
                   <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors">
                     Cancel
                   </button>
                   <button type="submit" className="px-5 py-2 rounded-lg bg-[#5c4033] text-white hover:bg-[#4a3329] font-medium transition-colors">
                     {editingCert ? 'Save Changes' : 'Issue Certificate'}
                   </button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}
