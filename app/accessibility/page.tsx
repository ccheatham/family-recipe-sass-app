export default function AccessibilityPage() {
  const features = [
    {
      title: 'Keyboard Navigation',
      description: 'Full keyboard navigation support for all interactive elements and features.',
      icon: '⌨️',
    },
    {
      title: 'Screen Reader Support',
      description: 'Compatible with popular screen readers including JAWS, NVDA, and VoiceOver.',
      icon: '🔊',
    },
    {
      title: 'High Contrast Mode',
      description: 'Support for high contrast settings and adjustable color schemes.',
      icon: '🎨',
    },
    {
      title: 'Scalable Text',
      description: 'Text can be resized up to 200% without loss of functionality.',
      icon: '🔤',
    },
    {
      title: 'Alternative Text',
      description: 'All images include descriptive alt text for screen reader users.',
      icon: '🖼️',
    },
    {
      title: 'Focus Indicators',
      description: 'Clear visual indicators show which element currently has keyboard focus.',
      icon: '🎯',
    },
  ];

  const wcagCompliance = [
    {
      level: 'Level A',
      status: 'Compliant',
      description: 'Basic web accessibility features are in place.',
    },
    {
      level: 'Level AA',
      status: 'Compliant',
      description: 'Enhanced accessibility features for most users.',
    },
    {
      level: 'Level AAA',
      status: 'Partial',
      description: 'We are working towards full Level AAA compliance.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Statement</h1>
          <p className="text-xl text-gray-600">
            Family Recipes is committed to ensuring digital accessibility for all users
          </p>
          <p className="text-gray-600 mt-2">Last updated: January 16, 2026</p>
        </div>

        {/* Commitment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Family Recipes, we believe that everyone should have equal access to preserve and
            share their family's culinary heritage. We are committed to making our website and mobile
            applications accessible to all users, including those with disabilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We continually work to enhance the accessibility and usability of our platform and
            adhere to the Web Content Accessibility Guidelines (WCAG) 2.1.
          </p>
        </div>

        {/* WCAG Compliance */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">WCAG 2.1 Compliance</h2>
          <div className="space-y-4">
            {wcagCompliance.map((item, index) => (
              <div key={index} className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.level}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === 'Compliant'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-3xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assistive Technologies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Assistive Technologies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Alternative input devices</li>
            <li>Browser text-to-speech</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We test our platform regularly with various assistive technologies to ensure
            compatibility and ease of use.
          </p>
        </div>

        {/* Browser Compatibility */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Browser Compatibility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Family Recipes is designed to work with the following browsers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Google Chrome (latest version)</li>
            <li>Mozilla Firefox (latest version)</li>
            <li>Apple Safari (latest version)</li>
            <li>Microsoft Edge (latest version)</li>
          </ul>
        </div>

        {/* Known Limitations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Known Limitations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Despite our best efforts, some areas of our website may have accessibility limitations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>
              User-uploaded images may not always have appropriate alternative text if users don't
              provide descriptions
            </li>
            <li>Some third-party embedded content may not be fully accessible</li>
            <li>
              Certain advanced features are still being enhanced for optimal accessibility
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We are actively working to address these limitations and improve accessibility across
            our entire platform.
          </p>
        </div>

        {/* Continuous Improvement */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are committed to ongoing accessibility improvements:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Regular accessibility audits and testing</li>
            <li>User feedback integration</li>
            <li>Staff training on accessibility best practices</li>
            <li>Staying current with WCAG guidelines and standards</li>
            <li>Proactive identification and resolution of accessibility issues</li>
          </ul>
        </div>

        {/* Feedback */}
        <div className="bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            We Value Your Feedback
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you encounter any accessibility barriers or have suggestions for improvement, please
            let us know. Your feedback helps us create a more inclusive experience for everyone.
          </p>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:accessibility@familyrecipes.com"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                accessibility@familyrecipes.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> <span className="text-gray-900">+1 (555) 123-4567</span>
            </p>
            <p className="text-gray-700">
              <strong>Mail:</strong> 123 Recipe Lane, San Francisco, CA 94102
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Formal Complaints */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Formal Complaints</h2>
          <p className="text-gray-700 leading-relaxed">
            If you wish to file a formal accessibility complaint, please contact us using the
            information above. We will respond to your complaint within 5 business days and work
            with you to resolve the issue as quickly as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
