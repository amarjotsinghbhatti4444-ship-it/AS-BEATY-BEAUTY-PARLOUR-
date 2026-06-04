'use client';
import { useState } from 'react';
import { Search, CheckCircle2, XCircle, Loader2, Award } from 'lucide-react';

export default function VerifyCertificatePage() {
  const [certId, setCertId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | 'valid' | 'invalid'>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;
    
    setIsLoading(true);
    setResult(null);

    // Mock API call
    setTimeout(() => {
      // For demo, anything starting with 'ASB' is valid
      if (certId.toUpperCase().startsWith('ASB')) {
        setResult('valid');
      } else {
        setResult('invalid');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-softpink min-h-[80vh] flex items-center justify-center py-20 px-4">
       <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          <div className="text-center mb-10">
             <div className="w-16 h-16 bg-rosegold/10 text-rosegold rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
             </div>
             <h1 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">Certificate Verification</h1>
             <p className="text-gray-600">Enter the certificate number to verify the authenticity of an AS Beauty Academy credential.</p>
          </div>

          <form onSubmit={handleVerify} className="mb-8">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="Enter Certificate Number (e.g. ASB1001)"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rosegold focus:border-transparent transition-all uppercase"
                  required
                />
             </div>
             <button 
               type="submit" 
               disabled={isLoading || !certId.trim()}
               className="w-full mt-4 py-4 bg-charcoal text-white rounded-xl font-medium hover:bg-rosegold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
             >
               {isLoading ? (
                 <><Loader2 className="animate-spin" size={20} /> Verifying...</>
               ) : (
                 'Verify Certificate'
               )}
             </button>
          </form>

          {/* Result Section */}
          {result === 'valid' && (
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100 flex gap-4 animate-in fade-in slide-in-from-bottom-4">
              <CheckCircle2 className="text-green-600 shrink-0" size={28} />
              <div>
                <h4 className="text-green-900 font-bold mb-4">Valid Certificate</h4>
                <div className="space-y-2 text-sm text-green-800">
                  <div className="grid grid-cols-3 gap-2 border-b border-green-200/50 pb-2">
                    <span className="font-medium opacity-70">Student Name</span>
                    <span className="col-span-2 font-bold">Jane Doe</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-b border-green-200/50 pb-2">
                    <span className="font-medium opacity-70">Course</span>
                    <span className="col-span-2 font-bold">Professional Makeup Masterclass</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-b border-green-200/50 pb-2">
                    <span className="font-medium opacity-70">Completion</span>
                    <span className="col-span-2 font-bold">November 2023</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <span className="font-medium opacity-70">Cert No.</span>
                    <span className="col-span-2 font-bold uppercase">{certId}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result === 'invalid' && (
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4 animate-in fade-in slide-in-from-bottom-4">
              <XCircle className="text-red-600 shrink-0" size={28} />
              <div>
                <h4 className="text-red-900 font-bold mb-1">Record Not Found</h4>
                <p className="text-red-700 text-sm">We couldn&apos;t find a matching certificate for &quot;{certId.toUpperCase()}&quot;. Please check the number and try again, or contact administration.</p>
              </div>
            </div>
          )}

       </div>
    </div>
  );
}
