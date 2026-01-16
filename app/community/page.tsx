export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: '💬',
      title: 'Discussion Forums',
      description: 'Join conversations about recipes, cooking tips, and family traditions with our community.',
    },
    {
      icon: '🎉',
      title: 'Community Events',
      description: 'Participate in monthly cooking challenges, recipe swaps, and virtual cooking sessions.',
    },
    {
      icon: '⭐',
      title: 'Featured Recipes',
      description: 'Share your family recipes and get featured on our community spotlight.',
    },
    {
      icon: '🏆',
      title: 'Recipe Contests',
      description: 'Enter your recipes in themed contests and win prizes and recognition.',
    },
  ];

  const recentDiscussions = [
    {
      title: 'Best practices for converting old measurements?',
      author: 'Sarah M.',
      replies: 24,
      time: '2 hours ago',
    },
    {
      title: 'Share your favorite family holiday recipes!',
      author: 'Mike R.',
      replies: 156,
      time: '5 hours ago',
    },
    {
      title: 'Tips for preserving recipes with unusual ingredients',
      author: 'Jennifer L.',
      replies: 18,
      time: '1 day ago',
    },
    {
      title: 'How do you handle recipe variations?',
      author: 'David K.',
      replies: 42,
      time: '2 days ago',
    },
  ];

  const upcomingEvents = [
    {
      title: 'February Recipe Challenge: Comfort Foods',
      date: 'February 1-28, 2026',
      participants: 342,
    },
    {
      title: 'Virtual Cooking Session: Italian Classics',
      date: 'January 25, 2026 at 7:00 PM EST',
      participants: 89,
    },
    {
      title: 'Recipe Swap: Desserts Edition',
      date: 'February 5, 2026',
      participants: 156,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-600">
            Connect with fellow home cooks and recipe enthusiasts worldwide
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Recent Discussions</h2>
                <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  View All →
                </button>
              </div>
              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-600 cursor-pointer">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>by {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.replies} replies</span>
                      <span>•</span>
                      <span>{discussion.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium">
                Start a Discussion
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                    <p className="text-xs text-gray-500">{event.participants} participating</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium">
                View All Events
              </button>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Be Respectful</h3>
              <p className="text-sm text-gray-600">
                Treat all community members with kindness and respect, regardless of their cooking experience level.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Share Generously</h3>
              <p className="text-sm text-gray-600">
                Share your knowledge, recipes, and experiences to help others in their culinary journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay On Topic</h3>
              <p className="text-sm text-gray-600">
                Keep discussions relevant to recipes, cooking, and family food traditions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Give Credit</h3>
              <p className="text-sm text-gray-600">
                Always credit the source when sharing recipes that aren't originally yours.
              </p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-600 mb-6">
            Create an account to start connecting with fellow food enthusiasts and share your family recipes.
          </p>
          <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
}
