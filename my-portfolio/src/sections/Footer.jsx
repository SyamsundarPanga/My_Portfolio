const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-black text-white border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <a href="#" className="text-3xl font-black tracking-tighter mb-8 block uppercase">
          Syam<span className="text-gray-500">Rao</span>
        </a>

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-all">GitHub</a>
          <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-all">LinkedIn</a>
          <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-all">Twitter</a>
        </div>

        <p className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-600">
          © {currentYear} Panga Syamsundar Rao • Based in Visakhapatnam, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
