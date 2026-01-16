export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'Family Recipes Launches AI-Powered Recipe Recognition',
      date: 'January 8, 2026',
      excerpt: 'New feature allows users to scan handwritten recipe cards and automatically convert them to digital format.',
    },
    {
      id: 2,
      title: 'Family Recipes Reaches 100,000 Users Milestone',
      date: 'December 15, 2025',
      excerpt: 'Platform celebrates major growth milestone as families worldwide embrace digital recipe preservation.',
    },
    {
      id: 3,
      title: 'Family Recipes Secures $5M in Series A Funding',
      date: 'November 20, 2025',
      excerpt: 'Funding will accelerate product development and expand team to meet growing demand.',
    },
  ];

  const mediaFeatures = [
    {
      outlet: 'TechCrunch',
      title: 'How Family Recipes is Digitizing Grandma\'s Cookbook',
      date: 'December 2025',
    },
    {
      outlet: 'The New York Times',
      title: 'Preserving Family History, One Recipe at a Time',
      date: 'November 2025',
    },
    {
      outlet: 'Food & Wine',
      title: 'The Best Apps for Organizing Your Recipe Collection',
      date: 'October 2025',
    },
    {
      outlet: 'Wired',
      title: 'The Technology Keeping Culinary Traditions Alive',
      date: 'September 2025',
    },
  ];

  const stats = [
    { number: '100K+', label: 'Active Users' },
    { number: '500K+', label: 'Recipes Preserved' },
    { number: '50+', label: 'Countries' },
    { number: '4.8★', label: 'User Rating' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
          <p className="text-xl text-gray-600">
            News, updates, and media coverage about Family Recipes
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Press Releases */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">{release.title}</h3>
                  <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">{release.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read Full Release →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">In the News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-sm font-semibold text-orange-600 mb-2">{feature.outlet}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{feature.date}</span>
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Press Kit</h2>
          <p className="text-gray-600 mb-6">
            Download our press kit for logos, brand assets, and company information.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium">
              Download Press Kit
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium">
              View Brand Guidelines
            </button>
          </div>
        </div>

        {/* Media Contact */}
        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Inquiries</h3>
          <p className="text-gray-600 mb-6">
            For press inquiries, interviews, or additional information, please contact our media team.
          </p>
          <div className="space-y-2">
            <p className="text-gray-900 font-medium">
              Email: <a href="mailto:press@familyrecipes.com" className="text-orange-600 hover:text-orange-700">press@familyrecipes.com</a>
            </p>
            <p className="text-gray-900 font-medium">
              Phone: <span className="text-orange-600">+1 (555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
