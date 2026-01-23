export default function HowToOrderPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">How to Order</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">
            Ordering Process
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">
                  Browse & Add to Cart
                </h3>
                <p className="text-stone-600">
                  Browse our collection and add your desired vinyl records to
                  your cart.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Contact Us</h3>
                <p className="text-stone-600">
                  Send us your cart details via email or phone with your
                  shipping information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Payment</h3>
                <p className="text-stone-600">
                  Complete payment using one of our accepted methods.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Shipping</h3>
                <p className="text-stone-600">
                  We'll carefully package and ship your records within 2-3
                  business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">
            Payment Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-stone-200 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-2">
                Bank Transfer
              </h3>
              <p className="text-stone-600 text-sm">
                Direct bank transfer with order confirmation via email.
              </p>
            </div>
            <div className="border border-stone-200 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-2">PayPal</h3>
              <p className="text-stone-600 text-sm">
                Secure PayPal payments accepted for all orders.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">
            Pricing & Shipping
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-stone-900 mb-2">Pricing</h3>
              <p className="text-stone-600">
                All prices are listed in USD and include handling fees. Prices
                may vary based on rarity and condition.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-2">
                Shipping Rates
              </h3>
              <ul className="text-stone-600 space-y-1">
                <li>
                  • Domestic (US): $5.99 for first record, $2.99 each additional
                </li>
                <li>
                  • International: $15.99 for first record, $5.99 each
                  additional
                </li>
                <li>• Free shipping on orders over $100 (domestic only)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-stone-900 mb-2">
                Shipping Time
              </h3>
              <ul className="text-stone-600 space-y-1">
                <li>• Domestic: 3-7 business days</li>
                <li>• International: 7-21 business days</li>
                <li>• Express shipping available upon request</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">
            Important Notes
          </h2>
          <ul className="text-stone-600 space-y-2">
            <li>
              • All records are carefully inspected and graded before shipping
            </li>
            <li>
              • We use professional record mailers and bubble wrap for
              protection
            </li>
            <li>• Insurance is included on all shipments over $50</li>
            <li>
              • Returns accepted within 14 days if item doesn't match
              description
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
