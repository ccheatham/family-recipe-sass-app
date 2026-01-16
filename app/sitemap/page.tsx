import Link from 'next/link';

export default function SitemapPage() {
  const siteStructure = [
    {
      category: 'Main Pages',
      links: [
        { title: 'Home', href: '/', description: 'Welcome to Family Recipes' },
        { title: 'Recipes', href: '/recipes', description: 'Browse all recipes' },
        { title: 'Create Recipe', href: '/recipes/create', description: 'Share your own recipe' },
        { title: 'Sign In', href: '/auth', description: 'Access your account' },
      ],
    },
    {
      category: 'Company',
      links: [
        { title: 'About', href: '/about', description: 'Learn about our mission and story' },
        { title: 'Blog', href: '/blog', description: 'Tips, stories, and inspiration' },
        { title: 'Careers', href: '/careers', description: 'Join our team' },
        { title: 'Press', href: '/press', description: 'News and media coverage' },
      ],
    },
    {
      category: 'Resources',
      links: [
        { title: 'Help Center', href: '/help', description: 'Find answers and get support' },
        { title: 'Community', href: '/community', description: 'Connect with other users' },
        { title: 'Guides', href: '/guides', description: 'Comprehensive tutorials' },
        { title: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { title: 'Privacy Policy', href: '/privacy', description: 'How we handle your data' },
        { title: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
        { title: 'Cookie Policy', href: '/cookies', description: 'Information about cookies' },
        { title: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { title: 'Accessibility', href: '/accessibility', description: 'Our accessibility commitment' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            A complete overview of all pages on Family Recipes
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="group block hover:bg-orange-50 rounded-lg p-3 transition-colors duration-200"
                    >
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
            <p className="text-gray-600 mb-6">
              Looking for something specific? Use the search or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/help"
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
              >
                Visit Help Center
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* XML Sitemap Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            For search engines:{' '}
            <a href="/sitemap.xml" className="text-orange-600 hover:text-orange-700 font-medium">
              View XML Sitemap
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
