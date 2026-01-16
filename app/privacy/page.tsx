export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 16, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Family Recipes. We respect your privacy and are committed to protecting your
              personal data. This privacy policy explains how we collect, use, and safeguard your
              information when you use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Name and email address</li>
              <li>Password (encrypted)</li>
              <li>Profile photo (optional)</li>
              <li>Payment information (processed securely through our payment provider)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Recipe Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We store the recipes you create, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Recipe names, ingredients, and instructions</li>
              <li>Photos and images</li>
              <li>Tags and categories</li>
              <li>Notes and stories</li>
              <li>Sharing settings and permissions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect information about how you use our service, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Pages visited and features used</li>
              <li>Time spent on the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide and maintain our service</li>
              <li>Process your transactions</li>
              <li>Send you important updates and notifications</li>
              <li>Improve and personalize your experience</li>
              <li>Respond to your support requests</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Family members you choose:</strong> When you share recipes with specific people</li>
              <li><strong>Service providers:</strong> Third-party companies that help us operate (hosting, payment processing, analytics)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Secure authentication and password protection</li>
              <li>Access controls and monitoring</li>
              <li>Daily automated backups</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise these rights, contact us at privacy@familyrecipes.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience. See our{' '}
              <a href="/cookies" className="text-orange-600 hover:text-orange-700 font-medium">
                Cookie Policy
              </a>{' '}
              for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service is not intended for children under 13. We do not knowingly collect
              personal information from children under 13. If you believe we have collected such
              information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time. We will notify you of significant
              changes by email or through a notice on our website. Your continued use of the service
              after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>Email: privacy@familyrecipes.com</li>
              <li>Address: 123 Recipe Lane, San Francisco, CA 94102</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
