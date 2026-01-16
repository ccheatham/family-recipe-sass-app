export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 16, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using Family Recipes ("Service"), you agree to be bound by these Terms
              of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Family Recipes provides a platform for users to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Create, store, and organize recipes</li>
              <li>Share recipes with family and friends</li>
              <li>Digitize handwritten recipe cards</li>
              <li>Create and export recipe collections</li>
              <li>Access community features and resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
              <li>Be at least 13 years old to create an account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Your Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all recipes, photos, and other content you upload ("User
              Content"). By uploading User Content, you grant us a license to store, display, and
              share your content as directed by your privacy and sharing settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Content Restrictions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to upload content that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violates any laws or regulations</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains harmful, offensive, or inappropriate material</li>
              <li>Includes viruses or malicious code</li>
              <li>Impersonates another person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Subscription and Payments</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Subscription Plans</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer both free and paid subscription plans. Paid subscriptions provide access to
              premium features and are billed on a recurring basis (monthly or annually).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Billing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By subscribing to a paid plan, you authorize us to charge your payment method:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Subscriptions renew automatically unless canceled</li>
              <li>Prices are subject to change with 30 days notice</li>
              <li>Refunds are provided within 30 days of initial purchase</li>
              <li>You can cancel your subscription at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes. You must not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use automated systems to access the Service without permission</li>
              <li>Collect user information without consent</li>
              <li>Engage in any activity that could harm our reputation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service, including its design, features, and underlying technology, is owned by
              Family Recipes and protected by copyright, trademark, and other intellectual property
              laws. You may not copy, modify, or distribute our Service without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service is provided "as is" without warranties of any kind. We do not guarantee
              that the Service will be uninterrupted, secure, or error-free. You use the Service at
              your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Family Recipes shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of the
              Service. Our total liability shall not exceed the amount you paid us in the past 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate your account if you violate these Terms or engage in
              harmful behavior. You may terminate your account at any time through your account
              settings. Upon termination, you may request to export your data within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of
              significant changes by email or through the Service. Your continued use after changes
              become effective constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of the State of California, without regard to
              conflict of law provisions. Any disputes shall be resolved in the courts of San
              Francisco County, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>Email: legal@familyrecipes.com</li>
              <li>Address: 123 Recipe Lane, San Francisco, CA 94102</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
