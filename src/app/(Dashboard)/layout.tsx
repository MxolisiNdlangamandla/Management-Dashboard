//import Menu from '@/components/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen flex">
      {/* Left Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <img src="/logo.png" alt="Logo" width={32} height={32}/>
          <span className="hidden lg:block">Blueprint</span>
        </Link>
       {/* <Menu /> */}
      </div>
      
      {/* Right Content Area */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <h3 className="font-semibold">Main Content Area</h3>
        <p className="text-sm mt-2">Your children content would render here:</p>
        {children}
      </div>
      {/*<Navbar />} */}
      {children}
    </div>
  );
}