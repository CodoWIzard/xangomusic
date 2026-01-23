export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Xango Music</h3>
            <p className="text-stone-300">
              Our office is located in Utrecht (NL), and our distribution
              warehouse is in Alkmaar (NL) providing stores in the Benelux
              countries with amazing and beautiful local music from all over the
              world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/new-releases"
                  className="hover:text-white transition-colors"
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  href="/how-to-order"
                  className="hover:text-white transition-colors"
                >
                  How to Order
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-stone-300 mb-2">Follow us for updates</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; 2026 Xango Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
