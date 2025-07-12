
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 font-sans">
      <div className="container mx-auto px-6 py-12 text-center max-w-7xl">
        <p className="text-2xl font-serif font-bold text-white mb-4">
          Renovate
        </p>
        <p className="mb-4">Creating Timeless Spaces</p>
        <p>
          &copy; {new Date().getFullYear()} Renovate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
