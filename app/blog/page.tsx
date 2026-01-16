import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Digitize Your Grandmother\'s Recipe Collection',
      excerpt: 'A step-by-step guide to preserving those precious handwritten recipe cards for future generations.',
      date: 'January 10, 2026',
      category: 'Tips & Tricks',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: '10 Tips for Organizing Your Family Recipe Library',
      excerpt: 'Learn how to categorize, tag, and organize your recipes so you can find them quickly when you need them.',
      date: 'January 5, 2026',
      category: 'Organization',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'The Story Behind the Recipe: Capturing Family History',
      excerpt: 'Why the stories behind your recipes are just as important as the ingredients themselves.',
      date: 'December 28, 2025',
      category: 'Family Stories',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Sharing Recipes Across Generations: A Digital Approach',
      excerpt: 'How technology is helping families stay connected through food and shared culinary traditions.',
      date: 'December 20, 2025',
      category: 'Technology',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Recipe Preservation 101: Scanning vs. Typing',
      excerpt: 'Comparing different methods for digitizing your family recipes and finding what works best for you.',
      date: 'December 15, 2025',
      category: 'Tips & Tricks',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Building Your Family Cookbook: A Complete Guide',
      excerpt: 'Everything you need to know about creating a beautiful digital or printed family cookbook.',
      date: 'December 10, 2025',
      category: 'Projects',
      readTime: '8 min read',
    },
  ];

  const categories = ['All', 'Tips & Tricks', 'Organization', 'Family Stories', 'Technology', 'Projects'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Family Recipes Blog</h1>
          <p className="text-xl text-gray-600">
            Tips, stories, and inspiration for preserving your family's culinary heritage
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200 border border-gray-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest tips, stories, and recipes delivered to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
