'use client';

import { useState, useEffect } from 'react';

interface Article {
  title: string;
  url: string;
  pubDate: string;
  contentSnippet: string;
}

const SubstackArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Using RSS2JSON service to fetch Substack RSS feed
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://nicholasconnelly.substack.com/feed')}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          // Filter out any items without required fields and limit to 3
          const validArticles = data.items
            .filter((item: any) => item.title && item.link && item.pubDate)
            .slice(0, 3)
            .map((item: any) => ({
              title: item.title,
              url: item.link,
              pubDate: item.pubDate,
              contentSnippet: item.contentSnippet || item.description || ''
            }));
          
          setArticles(validArticles);
        } else {
          throw new Error(data.message || 'Failed to parse articles');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Unable to load latest articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">{error}</p>
        <a 
          href="https://nicholasconnelly.substack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200 underline"
        >
          Visit my Substack
        </a>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No articles found.</p>
        <a 
          href="https://nicholasconnelly.substack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200 underline"
        >
          Visit my Substack
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <article key={index} className="border-b border-gray-200 pb-6 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-800 flex-1">
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {article.title}
              </a>
            </h3>
            <span className="text-gray-500 text-sm ml-4 flex-shrink-0">
              {new Date(article.pubDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          
          {article.contentSnippet && (
            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
              {article.contentSnippet}
            </p>
          )}
          
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            Read article
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </article>
      ))}
    </div>
  );
};

export default SubstackArticles;