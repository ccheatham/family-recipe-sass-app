import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] blob blob-animate opacity-20"
          style={{ backgroundColor: 'var(--color-primary)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] blob blob-animate opacity-15"
          style={{ backgroundColor: 'var(--color-secondary)', filter: 'blur(60px)', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] blob blob-animate opacity-20"
          style={{ backgroundColor: 'var(--color-accent)', filter: 'blur(50px)', animationDelay: '4s' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in"
                style={{ backgroundColor: 'rgba(123, 74, 226, 0.1)', color: 'var(--color-secondary)' }}
              >
                <span>🌟</span>
                <span>Trusted by 5K+ families worldwide</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-bounce-in delay-100" style={{ color: 'var(--color-text)' }}>
                Preserve Your Family's
                <span className="block text-gradient">
                  Culinary Legacy
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-up delay-200" style={{ color: 'var(--color-text-soft)' }}>
                The stories behind your family recipes are as important as the recipes themselves.
                Share, preserve, and celebrate the flavors that bring your family together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
                <Link
                  href="/auth"
                  className="btn-squish gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-playful-lg text-center"
                >
                  Start Your Collection ✨
                </Link>
                <Link
                  href="/recipes"
                  className="btn-squish px-8 py-4 rounded-2xl font-semibold text-lg border-2 text-center"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                >
                  Explore Recipes
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 animate-fade-up delay-400">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient">10K+</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-soft)' }}>Recipes Shared</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient">5K+</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-soft)' }}>Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-soft)' }}>Countries</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-up delay-300">
              <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-playful-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary)30, var(--color-secondary)20)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[120px] opacity-30">🍳</span>
                  </div>
                </div>
                {/* Floating card */}
                <div
                  className="absolute top-4 right-4 rounded-2xl shadow-playful p-4 animate-float"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: 'rgba(255, 107, 53, 0.15)' }}
                    >
                      ❤️
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--color-text)' }}>2,341 loves</div>
                      <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>this week</div>
                    </div>
                  </div>
                </div>
                {/* Another floating card */}
                <div
                  className="absolute bottom-4 left-4 rounded-2xl shadow-playful p-4 animate-float"
                  style={{ backgroundColor: 'var(--color-surface)', animationDelay: '1.5s' }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: 'rgba(123, 74, 226, 0.15)' }}
                    >
                      👨‍👩‍👧‍👦
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--color-text)' }}>127 families</div>
                      <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>joined today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Images Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: 'rgba(0, 212, 170, 0.1)', color: 'var(--color-accent)' }}
            >
              <span>✨</span>
              <span>Why families love us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              More Than Just <span className="text-gradient">Recipes</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-soft)' }}>
              Every dish tells a story. Capture the memories, traditions, and love that make your family recipes truly special.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card-playful rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
              <div
                className="h-48 relative flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--color-primary)30, var(--color-warm)20)' }}
              >
                <span className="text-7xl">📖</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Share Your Stories</h3>
                <p style={{ color: 'var(--color-text-soft)' }}>
                  Add personal anecdotes and family history to each recipe. Keep traditions alive for generations.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card-playful rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
              <div
                className="h-48 relative flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--color-secondary)30, var(--color-primary)20)' }}
              >
                <span className="text-7xl">👨‍👩‍👧‍👦</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Connect Families</h3>
                <p style={{ color: 'var(--color-text-soft)' }}>
                  Invite relatives to contribute their versions and keep your culinary heritage thriving.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card-playful rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
              <div
                className="h-48 relative flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--color-accent)30, var(--color-secondary)20)' }}
              >
                <span className="text-7xl">🔍</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Discover New Favorites</h3>
                <p style={{ color: 'var(--color-text-soft)' }}>
                  Explore recipes from families worldwide and find inspiration for your next family dinner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
        {/* Decorative blob */}
        <div
          className="absolute top-1/2 -right-40 w-80 h-80 blob opacity-15"
          style={{ backgroundColor: 'var(--color-warm)', filter: 'blur(60px)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Simple. Beautiful. <span className="text-gradient">Meaningful.</span>
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-soft)' }}>
              Start preserving your family recipes in just three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-playful text-4xl"
              >
                1️⃣
              </div>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Create Your Account</h3>
              <p className="text-lg" style={{ color: 'var(--color-text-soft)' }}>
                Sign up in seconds and start your family recipe collection. It's completely free to get started.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-playful text-4xl"
              >
                2️⃣
              </div>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Share Your Recipes</h3>
              <p className="text-lg" style={{ color: 'var(--color-text-soft)' }}>
                Add recipes with ingredients, instructions, and the special stories that make them unique.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-playful text-4xl"
              >
                3️⃣
              </div>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Connect & Preserve</h3>
              <p className="text-lg" style={{ color: 'var(--color-text-soft)' }}>
                Invite family members and build a lasting digital cookbook for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Loved by Families <span className="text-gradient">Everywhere</span>
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-soft)' }}>
              See what families are saying about preserving their culinary heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="card-playful rounded-3xl p-8" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>
              <p className="mb-6 italic" style={{ color: 'var(--color-text-soft)' }}>
                "Finally, all of my grandmother's recipes are in one place! I can now share them with my kids and know they'll never be lost."
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 text-xl font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  SM
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Sarah Martinez</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Austin, TX</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card-playful rounded-3xl p-8" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>
              <p className="mb-6 italic" style={{ color: 'var(--color-text-soft)' }}>
                "The story feature is beautiful. Each recipe feels like a chapter in our family's history. My kids love reading about their great-grandparents."
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 text-xl font-bold text-white"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  JC
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>James Chen</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card-playful rounded-3xl p-8" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>
              <p className="mb-6 italic" style={{ color: 'var(--color-text-soft)' }}>
                "This platform brought our scattered family closer together. We're all contributing recipes and the collection grows every week!"
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 text-xl font-bold text-white"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  RP
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Rosa Patel</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Miami, FL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-secondary relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Start Preserving Your Family's Food Legacy Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of families already sharing and preserving their culinary traditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth"
              className="btn-squish px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg"
              style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)' }}
            >
              Get Started Free
            </Link>
            <Link
              href="/recipes"
              className="btn-squish px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Browse Recipes
            </Link>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            No credit card required • Free forever • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
