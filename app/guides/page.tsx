export default function GuidesPage() {
  const guides = [
    {
      category: 'Getting Started',
      icon: '🚀',
      items: [
        {
          title: 'Complete Beginner's Guide to Family Recipes',
          description: 'Everything you need to know to get started with preserving your family recipes.',
          duration: '15 min read',
          level: 'Beginner',
        },
        {
          title: 'Setting Up Your Recipe Collection',
          description: 'Learn how to organize and structure your recipe library effectively.',
          duration: '10 min read',
          level: 'Beginner',
        },
      ],
    },
    {
      category: 'Digitizing Recipes',
      icon: '📱',
      items: [
        {
          title: 'Scanning Handwritten Recipe Cards',
          description: 'Step-by-step guide to digitizing old recipe cards with your phone or scanner.',
          duration: '12 min read',
          level: 'Intermediate',
        },
        {
          title: 'Converting Measurements and Units',
          description: 'How to standardize measurements from old recipes to modern formats.',
          duration: '8 min read',
          level: 'Beginner',
        },
        {
          title: 'Preserving Recipe Photos',
          description: 'Best practices for photographing recipes and family cooking memories.',
          duration: '10 min read',
          level: 'All Levels',
        },
      ],
    },
    {
      category: 'Organization',
      icon: '📂',
      items: [
        {
          title: 'Creating an Effective Tagging System',
          description: 'Master the art of categorizing recipes for easy searching and discovery.',
          duration: '9 min read',
          level: 'Intermediate',
        },
        {
          title: 'Building Recipe Collections',
          description: 'Group related recipes into collections for holidays, events, and themes.',
          duration: '7 min read',
          level: 'Beginner',
        },
      ],
    },
    {
      category: 'Sharing & Collaboration',
      icon: '👨‍👩‍👧‍👦',
      items: [
        {
          title: 'Setting Up Family Sharing Groups',
          description: 'Create and manage groups to share recipes with your extended family.',
          duration: '11 min read',
          level: 'Intermediate',
        },
        {
          title: 'Privacy and Permissions Guide',
          description: 'Understanding who can see and edit your recipes, and how to control access.',
          duration: '8 min read',
          level: 'All Levels',
        },
        {
          title: 'Collaborative Recipe Editing',
          description: 'Work together with family members to perfect recipes over time.',
          duration: '10 min read',
          level: 'Advanced',
        },
      ],
    },
    {
      category: 'Advanced Features',
      icon: '⚡',
      items: [
        {
          title: 'Creating Digital Family Cookbooks',
          description: 'Compile and export your recipes into beautiful digital or printed cookbooks.',
          duration: '20 min read',
          level: 'Advanced',
        },
        {
          title: 'Using Recipe Templates',
          description: 'Speed up recipe entry with customizable templates for different recipe types.',
          duration: '12 min read',
          level: 'Intermediate',
        },
      ],
    },
  ];

  const featuredGuide = {
    title: 'The Complete Recipe Preservation Masterclass',
    description: 'A comprehensive 45-minute guide covering everything from digitization to sharing, perfect for families looking to preserve their culinary heritage.',
    duration: '45 min read',
    level: 'All Levels',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Guides & Tutorials</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guides to help you make the most of Family Recipes
          </p>
        </div>

        {/* Featured Guide */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white mb-12">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Featured Guide
              </span>
              <h2 className="text-3xl font-bold mb-4">{featuredGuide.title}</h2>
              <p className="text-lg mb-6 text-orange-50">{featuredGuide.description}</p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm">{featuredGuide.duration}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">{featuredGuide.level}</span>
              </div>
              <button className="px-6 py-3 bg-white text-orange-600 rounded-md hover:bg-orange-50 transition-colors duration-200 font-medium">
                Start Reading
              </button>
            </div>
            <div className="hidden md:block text-8xl ml-8">📚</div>
          </div>
        </div>

        {/* Guides by Category */}
        <div className="space-y-8">
          {guides.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((guide, guideIndex) => (
                  <div
                    key={guideIndex}
                    className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span>{guide.duration}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          guide.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          guide.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                          guide.level === 'Advanced' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {guide.level}
                        </span>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        Read →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Tutorials CTA */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prefer Video Tutorials?
          </h3>
          <p className="text-gray-600 mb-6">
            Check out our YouTube channel for step-by-step video guides and cooking tips.
          </p>
          <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium">
            Watch Video Tutorials
          </button>
        </div>
      </div>
    </div>
  );
}
