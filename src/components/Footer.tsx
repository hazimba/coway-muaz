const Footer = () => {
  return (
    <footer className="w-full bg-white p-4 mt-auto">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Application. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
