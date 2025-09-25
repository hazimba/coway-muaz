import { Separator } from "@radix-ui/react-separator";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-8 p-4">
      <div className="mx-auto flex justify-center items-center max-w-6xl flex-col gap-4">
        <Separator className="max-w-6xl" />
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hazim Bakar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
