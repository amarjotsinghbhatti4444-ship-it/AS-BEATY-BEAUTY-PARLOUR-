'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Scissors } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock login for structural requirement
    if (username === 'admin' && password === 'admin') {
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials. Use admin / admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="bg-rosegold text-white p-3 rounded-full mb-4">
             <Scissors size={28} />
          </div>
          <h2 className="text-center text-3xl font-bold font-playfair text-gray-900 mb-2">
            Admin Portal
          </h2>
          <p className="text-center text-sm text-gray-600">
             AS Beauty Salon and Academy
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
             <div className="relative">
               <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
               <input
                 type="text"
                 required
                 className="appearance-none rounded-xl relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-rosegold focus:border-rosegold focus:z-10 sm:text-sm"
                 placeholder="Username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
               />
             </div>
             <div className="relative">
               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
               <input
                 type="password"
                 required
                 className="appearance-none rounded-xl relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-rosegold focus:border-rosegold focus:z-10 sm:text-sm"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
             </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-charcoal hover:bg-rosegold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rosegold transition-colors"
            >
              Sign in
            </button>
          </div>
          <div className="text-center mt-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-rosegold">&larr; Back to Website</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
