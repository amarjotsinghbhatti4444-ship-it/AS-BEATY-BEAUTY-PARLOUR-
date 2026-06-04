import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
