'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is Family Recipes?',
          a: 'Family Recipes is a platform designed to help you preserve, organize, and share your family\'s culinary heritage. You can digitize handwritten recipe cards, add photos and stories, and share recipes with family members across the world.',
        },
        {
          q: 'Is Family Recipes free to use?',
          a: 'We offer a free plan that allows you to store up to 50 recipes. For unlimited recipes and advanced features like family sharing, recipe scanning, and cookbook creation, we offer premium plans starting at $9.99/month.',
        },
        {
          q: 'Do I need to download an app?',
          a: 'No download required! Family Recipes works directly in your web browser on any device. However, we do offer optional mobile apps for iOS and Android for a more streamlined experience.',
        },
      ],
    },
    {
      category: 'Adding Recipes',
      questions: [
        {
          q: 'How do I add a recipe?',
          a: 'Click the "Share Recipe" button in the navigation menu. You can manually type in the recipe, scan a recipe card using your phone\'s camera, or import from a URL.',
        },
        {
          q: 'Can I scan handwritten recipe cards?',
          a: 'Yes! Our AI-powered scanning feature can read handwritten recipe cards and convert them to digital format. This feature is available on all premium plans.',
        },
        {
          q: 'What if my recipe has special formatting or unusual ingredients?',
          a: 'Our recipe editor supports rich text formatting, custom ingredient lists, and notes sections. You can add any type of ingredient or instruction, regardless of how unique or traditional it is.',
        },
      ],
    },
    {
      category: 'Sharing & Privacy',
      questions: [
        {
          q: 'Who can see my recipes?',
          a: 'By default, all your recipes are private and only visible to you. You can choose to share individual recipes or entire collections with specific family members or make them public.',
        },
        {
          q: 'How do I share recipes with my family?',
          a: 'You can invite family members to join your Family Group by email. Once they join, you can share specific recipes or collections with the group. You maintain full control over who sees what.',
        },
        {
          q: 'Can multiple people edit the same recipe?',
          a: 'Yes! When you share a recipe with edit permissions, family members can suggest changes or make updates. You can choose whether changes are applied immediately or require approval.',
        },
      ],
    },
    {
      category: 'Organization',
      questions: [
        {
          q: 'How do I organize my recipes?',
          a: 'You can organize recipes using tags, categories, and collections. Tags are flexible labels (like "vegetarian", "quick", "holiday"), while collections are curated groups of recipes (like "Mom\'s Favorites" or "Holiday Dinners").',
        },
        {
          q: 'Can I search for recipes?',
          a: 'Yes! Our search feature lets you find recipes by name, ingredient, tag, author, or even text within the recipe instructions or notes.',
        },
      ],
    },
    {
      category: 'Account & Billing',
      questions: [
        {
          q: 'How do I upgrade my account?',
          a: 'Go to Settings > Subscription and choose the plan that works for you. You can upgrade, downgrade, or cancel anytime.',
        },
        {
          q: 'What happens if I cancel my subscription?',
          a: 'If you cancel a premium subscription, you\'ll retain access to premium features until the end of your billing period. After that, your account will revert to the free plan, and recipes beyond the 50-recipe limit will be archived (but not deleted).',
        },
        {
          q: 'Can I export my recipes?',
          a: 'Yes! You can export your recipes in multiple formats including PDF, Word document, or as a formatted cookbook. Your data is always yours.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What browsers are supported?',
          a: 'Family Recipes works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.',
        },
        {
          q: 'Is my data backed up?',
          a: 'Yes! We automatically back up all your data daily. Your recipes are stored securely in the cloud and are accessible from any device.',
        },
        {
          q: 'What if I have technical issues?',
          a: 'Visit our Help Center or contact our support team at support@familyrecipes.com. We typically respond within 24 hours.',
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find quick answers to common questions about Family Recipes
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div key={currentIndex} className="border-b border-gray-200 pb-4 last:border-0">
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full flex justify-between items-center text-left focus:outline-none group"
                      >
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                          {faq.q}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-4 ${
                            openIndex === currentIndex ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openIndex === currentIndex && (
                        <div className="mt-3 text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Contact Support
            </a>
            <a
              href="/help"
              className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
