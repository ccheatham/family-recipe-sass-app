'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mock recipe data
const mockRecipes = [
  {
    id: '1',
    title: "Grandma's Classic Chocolate Chip Cookies",
    author: 'Sarah Johnson',
    description: 'The secret family recipe passed down for three generations. Perfectly crispy on the outside, chewy on the inside.',
    cookTime: '25 min',
    servings: 24,
    category: 'Dessert',
    isPublic: true,
    imageUrl: '/placeholder-cookie.jpg',
    likes: 142,
  },
  {
    id: '2',
    title: 'Italian Sunday Gravy',
    author: 'Marco Rossi',
    description: 'A traditional Italian red sauce that simmers all day. The foundation of our family Sunday dinners.',
    cookTime: '4 hours',
    servings: 8,
    category: 'Main Course',
    isPublic: true,
    imageUrl: '/placeholder-pasta.jpg',
    likes: 98,
  },
  {
    id: '3',
    title: 'Mom\'s Banana Bread',
    author: 'Emily Chen',
    description: 'Moist and flavorful banana bread that fills the house with the most amazing aroma.',
    cookTime: '1 hour',
    servings: 12,
    category: 'Breakfast',
    isPublic: true,
    imageUrl: '/placeholder-bread.jpg',
    likes: 76,
  },
  {
    id: '4',
    title: 'Uncle Pete\'s BBQ Ribs',
    author: 'Pete Wilson',
    description: 'Fall-off-the-bone ribs with a secret dry rub that took years to perfect.',
    cookTime: '3 hours',
    servings: 6,
    category: 'Main Course',
    isPublic: true,
    imageUrl: '/placeholder-ribs.jpg',
    likes: 203,
  },
  {
    id: '5',
    title: 'Aunt Maria\'s Flan',
    author: 'Maria Garcia',
    description: 'Silky smooth caramel custard that melts in your mouth. A celebration staple.',
    cookTime: '2 hours',
    servings: 8,
    category: 'Dessert',
    isPublic: true,
    imageUrl: '/placeholder-flan.jpg',
    likes: 134,
  },
  {
    id: '6',
    title: 'Dad\'s Famous Chili',
    author: 'John Smith',
    description: 'Award-winning chili recipe with the perfect blend of spices and a secret ingredient.',
    cookTime: '2.5 hours',
    servings: 10,
    category: 'Soup',
    isPublic: true,
    imageUrl: '/placeholder-chili.jpg',
    likes: 167,
  },
];

const categories = ['All', 'Breakfast', 'Main Course', 'Dessert', 'Soup', 'Appetizer'];

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = mockRecipes.filter((recipe) => {
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12" style={{ background: 'var(--gradient-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Family Recipe Collection
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover delicious recipes shared by families around the world. Each dish tells a story.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 border border-[var(--border-primary)] rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm text-[var(--text-primary)] bg-[var(--bg-primary)]"
                aria-label="Search recipes"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter recipes by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-orange-500 hover:text-orange-500'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Screen reader announcement for filtered results */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {filteredRecipes.length === 0
            ? 'No recipes found'
            : `Showing ${filteredRecipes.length} ${filteredRecipes.length === 1 ? 'recipe' : 'recipes'}`}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="group bg-[var(--bg-primary)] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.15),0_12px_32px_rgba(239,68,68,0.1)] transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:-translate-y-1"
            >
              {/* Recipe Image Placeholder */}
              <div className="h-52 relative overflow-hidden" style={{ background: 'var(--gradient-image)' }}>
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/40 group-hover:text-white/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[var(--bg-primary)]/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--text-secondary)] shadow-sm">
                  {recipe.category}
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6 bg-[var(--bg-primary)]">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {recipe.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-5 line-clamp-2 leading-relaxed">
                  {recipe.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-[var(--text-tertiary)] mb-5">
                  <div className="flex items-center space-x-5">
                    <span className="flex items-center font-medium">
                      <svg className="w-4 h-4 mr-1.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.cookTime}
                    </span>
                    <span className="flex items-center font-medium">
                      <svg className="w-4 h-4 mr-1.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {recipe.servings}
                    </span>
                  </div>
                </div>

                {/* Author and Likes */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-tertiary)]">
                  <span className="text-sm text-[var(--text-secondary)] font-medium">by {recipe.author}</span>
                  <span className="flex items-center text-sm text-[var(--text-secondary)] font-medium">
                    <svg className="w-4 h-4 mr-1.5 text-red-400 fill-current group-hover:text-red-500 transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {recipe.likes}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-[var(--text-muted)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No recipes found</h3>
            <p className="text-[var(--text-secondary)]">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA to Share Recipe */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--bg-primary)] rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Have a family recipe to share?</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Add your family's special recipes and keep your culinary traditions alive for future generations.
            </p>
            <Link
              href="/recipes/create"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Share Your Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
