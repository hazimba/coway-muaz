import SplitSection from "@/components/SplitSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-custom relative w-screen scroll-mt-22">
      <SplitSection title="Contact Us" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-lg">
            Have questions or need more information? We're here to help!
          </p>
          <Link
            href="https://wa.me/601140432883?text=Hello%20I%20am%20interested%20to%20know%20more%20about%20Coway%20products."
            className="lg:block p-10"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button className="w-48 mt-8 lg:mt-4" size="icon" variant="outline">
              <Phone className="" />
              Contact Muaz Maarof
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Contact;
