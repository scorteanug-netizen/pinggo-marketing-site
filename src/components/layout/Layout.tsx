import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { TopMarqueeBanner } from "@/components/TopMarqueeBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopMarqueeBanner />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
