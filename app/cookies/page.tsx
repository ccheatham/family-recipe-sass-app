export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      purpose: 'Required for basic functionality',
      examples: ['Authentication', 'Security', 'Session management'],
      canDisable: false,
    },
    {
      type: 'Functional Cookies',
      purpose: 'Enhance user experience',
      examples: ['Language preferences', 'Theme settings', 'Recent searches'],
      canDisable: true,
    },
    {
      type: 'Analytics Cookies',
      purpose: 'Help us understand usage patterns',
      examples: ['Google Analytics', 'Page views', 'Feature usage tracking'],
      canDisable: true,
    },
    {
      type: 'Marketing Cookies',
      purpose: 'Personalize ads and content',
      examples: ['Ad preferences', 'Social media integration', 'Conversion tracking'],
      canDisable: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: January 16, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files stored on your device when you visit our website. They
              help us provide you with a better experience by remembering your preferences and
              understanding how you use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{cookie.type}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cookie.canDisable
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {cookie.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Purpose:</strong> {cookie.purpose}
                  </p>
                  <p className="text-gray-700">
                    <strong>Examples:</strong> {cookie.examples.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Keep you signed in to your account</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our Service</li>
              <li>Improve our features and functionality</li>
              <li>Provide personalized content and recommendations</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use third-party services that may set their own cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
              <li><strong>Stripe:</strong> For secure payment processing</li>
              <li><strong>Social Media Platforms:</strong> For social sharing features</li>
              <li><strong>Customer Support Tools:</strong> For chat and support functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              These third parties have their own privacy policies and cookie policies, which govern
              their use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Preferences</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can manage your cookie preferences at any time through our Cookie Settings. Note
              that disabling certain cookies may affect the functionality of our Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most browsers allow you to control cookies through their settings:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies when you close your browser</li>
              <li>View and delete individual cookies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please note that if you block all cookies, you may not be able to use all features of
              our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain cookies for different periods depending on their purpose:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain until expiration date or manual deletion</li>
              <li><strong>Analytics cookies:</strong> Typically retained for 2 years</li>
              <li><strong>Preference cookies:</strong> Retained until you change your settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do Not Track</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some browsers support a "Do Not Track" feature. While we respect privacy choices, we
              currently do not respond to Do Not Track signals because there is no industry standard
              for how to interpret them. You can use our Cookie Settings to manage your preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices
              or for legal, regulatory, or operational reasons. We will notify you of significant
              changes by posting a notice on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>Email: privacy@familyrecipes.com</li>
              <li>Address: 123 Recipe Lane, San Francisco, CA 94102</li>
            </ul>
          </section>

          <div className="bg-orange-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Manage Cookie Preferences</h3>
            <p className="text-gray-700 mb-4">
              You can update your cookie preferences at any time.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
