import HeaderSection from "./components/HeaderSection";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeaderSection />
      <div className="container mx-auto px-4 py-8">
        <OurValues />
        <ContactUs />
      </div>
    </main>
  );
}
