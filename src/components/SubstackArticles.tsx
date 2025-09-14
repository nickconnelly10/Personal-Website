'use client';

import { useState, useEffect } from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  pubDate: string;
  guid: string;
}

const SubstackArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Since we can't make direct API calls from the client, we'll use a mock data approach
        // In a real implementation, you'd want to create an API route to fetch from Substack RSS
        const mockArticles: Article[] = [
          {
            title: "The Future of Health Technology",
            description: "Exploring how technology can democratize health knowledge and empower individuals to take control of their wellness journey.",
            url: "https://nicholasconnelly.substack.com/p/future-of-health-technology",
            pubDate: "2024-01-15",
            guid: "1"
          },
          {
            title: "Building Communities in Healthcare",
            description: "Lessons learned from founding The Nest Running Club and how community building applies to healthcare innovation.",
            url: "https://nicholasconnelly.substack.com/p/building-communities-healthcare",
            pubDate: "2024-01-08",
            guid: "2"
          },
          {
            title: "DeFi and Health: Parallels in Self-Sovereignty",
            description: "Drawing connections between decentralized finance and personal health autonomy, and what we can learn from both movements.",
            url: "https://nicholasconnelly.substack.com/p/defi-health-self-sovereignty",
            pubDate: "2024-01-01",
            guid: "3"
          }
        ];
        
        setArticles(mockArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='bg-white border border-gray-200 rounded-lg p-6 animate-pulse'>
            <div className='h-4 bg-gray-200 rounded w-3/4 mb-3'></div>
            <div className='h-3 bg-gray-200 rounded w-full mb-2'></div>
            <div className='h-3 bg-gray-200 rounded w-5/6'></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {articles.map((article) => (
        <div key={article.guid} className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full'>
          <div className='mb-4 flex-grow'>
            <h3 className='text-xl font-medium text-gray-800 mb-2 line-clamp-2'>
              {article.title}
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
              {article.description}
            </p>
          </div>
          <div className='flex justify-between items-center mt-auto'>
            <div className='text-sm text-gray-500'>
              {new Date(article.pubDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <a 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubstackArticles;