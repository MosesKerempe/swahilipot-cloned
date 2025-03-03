import Link from 'next/link';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export default function FeaturedArticle({ title, excerpt, author, date, image, slug }: FeaturedArticleProps) {
  return (
    <div className="bg-[#f0f4f8] rounded-lg shadow-md overflow-hidden"> {/* Dull cream/blue background */}
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="text-sm text-primary font-medium mb-2">{date}</div>
          <h2 className="text-xl font-bold mb-4"> {/* Reduced font size by 30% */}
            {title}
          </h2>
          <p className="text-gray-700 mb-6 text-sm"> {/* Reduced font size by 30% */}
            {excerpt}
          </p>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
            <span className="text-gray-600 text-sm"> {/* Reduced font size by 30% */}
              By {author}
            </span>
          </div>
          <a
            href="https://medium.com/@swahilipotengineering/christopher-mwalimo-my-experience-from-being-an-attachee-to-working-at-swahilipot-hub-foundation-97f7043d5596"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm py-2 px-4"  
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}
