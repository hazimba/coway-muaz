import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">COWAY</h1>
        <p className="text-lg text-gray-600">
          This is a sample application using Next.js and Tailwind CSS.
        </p>
        <Link href="/home">
          <Button size="lg" variant="outline">
            Go to Home Page
          </Button>
        </Link>
        <Link href="/home">
          <Button size="lg" variant="ghost">
            Contact Me!
          </Button>
        </Link>
      </div>
    </div>
  );
}
