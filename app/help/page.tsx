import Link from 'next/link';

export default function HelpCenterPage() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        { title: 'Creating Your First Recipe', link: '#' },
        { title: 'Setting Up Your Profile', link: '#' },
        { title: 'Navigating the Dashboard', link: '#' },
        { title: 'Quick Start Guide', link: '#' },
      ],
    },
    {
      title: 'Managing Recipes',
      icon: '📝',
      articles: [
        { title: 'Adding Recipes Manually', link: '#' },
        { title: 'Scanning Recipe Cards', link: '#' },
        { title: 'Editing and Updating Recipes', link: '#' },
        { title: 'Organizing with Tags and Categories', link: '#' },
      ],
    },
    {
      title: 'Sharing & Collaboration',
      icon: '👥',
      articles: [
        { title: 'Sharing Recipes with Family', link: '#' },
        { title: 'Creating Family Groups', link: '#' },
        { title: 'Privacy Settings', link: '#' },
        { title: 'Collaborative Recipe Editing', link: '#' },
      ],
    },
    {
      title: 'Account & Billing',
      icon: '💳',
      articles: [
        { title: 'Upgrading Your Plan', link: '#' },
        { title: 'Managing Subscriptions', link: '#' },
        { title: 'Billing FAQs', link: '#' },
        { title: 'Cancellation Policy', link: '#' },
      ],
    },
    {
      title: 'Technical Support',
      icon: '🔧',
      articles: [
        { title: 'Troubleshooting Login Issues', link: '#' },
        { title: 'Mobile App Support', link: '#' },
        { title: 'Browser Compatibility', link: '#' },
        { title: 'Reporting Bugs', link: '#' },
      ],
    },
    {
      title: 'Tips & Best Practices',
      icon: '💡',
      articles: [
        { title: 'Digitizing Old Recipe Cards', link: '#' },
        { title: 'Writing Great Recipe Descriptions', link: '#' },
        { title: 'Photo Tips for Recipes', link: '#' },
        { title: 'Preserving Family Stories', link: '#' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers and get support for all your questions
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg text-gray-900"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a
                      href={article.link}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <span className="text-orange-600 mr-3 text-xl">📖</span>
              <span className="text-gray-700">How to scan and digitize recipe cards</span>
            </a>
            <a href="#" className="flex items-center p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <span className="text-orange-600 mr-3 text-xl">👨‍👩‍👧‍👦</span>
              <span className="text-gray-700">Setting up a family recipe sharing group</span>
            </a>
            <a href="#" className="flex items-center p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <span className="text-orange-600 mr-3 text-xl">🔒</span>
              <span className="text-gray-700">Understanding privacy and sharing settings</span>
            </a>
            <a href="#" className="flex items-center p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <span className="text-orange-600 mr-3 text-xl">💾</span>
              <span className="text-gray-700">Backing up and exporting your recipes</span>
            </a>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Contact Support
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
