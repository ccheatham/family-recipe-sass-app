'use client';

import Link from 'next/link';

// Recipe interface
export interface Recipe {
  id: string;
  title: string;
  author: string;
  description: string;
  cookTime: string;
  servings: number;
  category: string;
  isPublic?: boolean;
  imageUrl?: string;
  likes: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="group bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.15),0_12px_32px_rgba(239,68,68,0.1)] transition-all duration-300 overflow-hidden hover:scale-[1.01] hover:-translate-y-1"
    >
      {/* Recipe Image Placeholder */}
      <div className="h-52 bg-gradient-to-br from-orange-100 via-orange-200 to-red-200 relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-24 h-24 text-white/40 group-hover:text-white/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
          {recipe.category}
        </div>
      </div>

      {/* Recipe Info */}
      <div className="p-6 bg-gradient-to-b from-white to-orange-50/30">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {recipe.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
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
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-600 font-medium">by {recipe.author}</span>
          <span className="flex items-center text-sm text-gray-600 font-medium">
            <svg className="w-4 h-4 mr-1.5 text-red-400 fill-current group-hover:text-red-500 transition-colors duration-300" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {recipe.likes}
          </span>
        </div>
      </div>
    </Link>
  );
}
