export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build the future of family recipe preservation with modern web technologies.',
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive experiences that help families connect through food and tradition.',
    },
    {
      id: 3,
      title: 'Community Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and nurture our community of home cooks and recipe enthusiasts.',
    },
    {
      id: 4,
      title: 'Content Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create compelling content about recipes, cooking, and family traditions.',
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work',
    'Unlimited PTO',
    'Professional development budget',
    'Home office stipend',
    'Team retreats and events',
    '401(k) matching',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build technology that brings families together through their culinary traditions
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Work With Us?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Family Recipes, we're passionate about preserving culinary heritage and helping
            families stay connected across generations. We're a small, dedicated team that values
            creativity, collaboration, and making a meaningful impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you're excited about building products that matter and working with a team that
            cares deeply about what we do, we'd love to hear from you.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See the Right Role?
          </h3>
          <p className="text-gray-600 mb-6">
            We're always looking for talented people. Send us your resume and we'll keep you in mind
            for future opportunities.
          </p>
          <a
            href="mailto:careers@familyrecipes.com"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
          >
            Email Us Your Resume
          </a>
        </div>
      </div>
    </div>
  );
}
