export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-stone-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-stone-900">Email</h3>
                  <p className="text-stone-600">info@vinylvault.com</p>
                  <p className="text-stone-500 text-sm">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-stone-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-stone-900">Phone</h3>
                  <p className="text-stone-600">(555) 123-VINYL</p>
                  <p className="text-stone-500 text-sm">Mon-Fri 10AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-stone-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-stone-900">
                    Store Location
                  </h3>
                  <p className="text-stone-600">
                    123 Music Row
                    <br />
                    Nashville, TN 37203
                  </p>
                  <p className="text-stone-500 text-sm">
                    Visit by appointment only
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Store Hours
            </h2>
            <div className="space-y-2 text-stone-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-2 px-4 rounded-lg hover:bg-stone-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Map Placeholder
            </h2>
            <div className="bg-stone-100 rounded-lg h-48 flex items-center justify-center">
              <p className="text-stone-500">
                Interactive map would be embedded here
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
