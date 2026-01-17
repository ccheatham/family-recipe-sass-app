import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Your Family's
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}Culinary Heritage
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create, share, and preserve your family's favorite recipes. Connect with loved ones
            through the stories and flavors that make your family unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/recipes/create"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Share a Recipe
            </Link>
            <Link
              href="/recipes"
              className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
            >
              Browse Recipes
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Stories</h3>
            <p className="text-gray-600">
              Every recipe tells a story. Share the memories and traditions that make your family recipes special.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect Family</h3>
            <p className="text-gray-600">
              Invite family members to contribute their recipes and keep your culinary traditions alive.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Private & Public</h3>
            <p className="text-gray-600">
              Choose to keep recipes within your family or share them publicly with the community.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community and start building your family recipe collection today.
          </p>
          <Link
            href="/auth"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 inline-block"
          >
            Sign In to Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
