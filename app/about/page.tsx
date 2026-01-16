import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Family Recipes</h1>
          <p className="text-xl text-gray-600">
            Preserving culinary heritage, one recipe at a time
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Family Recipes is dedicated to helping families preserve, share, and celebrate their
              culinary traditions. We believe that recipes are more than just instructions—they're
              stories, memories, and connections that span generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform makes it easy to digitize family recipes, share them with loved ones,
              and ensure that these precious culinary traditions are never lost.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Help families digitize and organize their recipe collections</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Provide tools for sharing recipes with family members worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Preserve the stories and memories behind each recipe</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Build a community of home cooks passionate about family traditions</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Family Recipes was born from a simple desire: to preserve Grandma's famous recipes
              before they were lost forever. We realized that countless families face the same
              challenge—handwritten recipe cards fading with time, recipes scattered across different
              notebooks, and the fear of losing these precious family treasures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to help thousands of families keep their culinary traditions alive
              and accessible for future generations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you have a single cherished recipe or an entire collection to preserve,
              we're here to help you keep your family's culinary heritage alive.
            </p>
            <Link
              href="/auth"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Get Started Today
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
