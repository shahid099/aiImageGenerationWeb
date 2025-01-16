import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className= "text-black py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm mb-4">&copy; 2025 My Website. All Rights Reserved.</p>
        <div className="flex justify-center gap-24">
          <Link to="/page-not-found" className="hover:underline text-sm">
            About
          </Link>
          <Link to="/page-not-found" className="hover:underline text-sm">
            Privacy
          </Link>
          <Link to="/page-not-found" className="hover:underline text-sm">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
