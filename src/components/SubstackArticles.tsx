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
          `https://api.rss2json.com/v1/api.json?rss_url=https://nicholasconnelly.substack.com/feed`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          setArticles(data.items.slice(0, 3)); // Show only latest 3 articles
        } else {
          throw new Error(data.message || 'Failed to parse articles');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles');
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
        <article key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              {article.title}
            </a>
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {new Date(article.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {article.contentSnippet}
          </p>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline"
          >
            Read more →
          </a>
        </article>
      ))}
    </div>
  );
};

export default SubstackArticles;