import Link from 'next/link';

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

function ArticleCard({ title, excerpt, author, date, image, slug, category }: ArticleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-primary font-medium">{date}</span>
          <span className="text-xs bg-light px-2 py-1 rounded-full">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
            <span className="text-sm text-gray-600">By {author}</span>
          </div>
          <a
            href="https://medium.com/@swahilipotengineering"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Articles() {
  // All articles in a single array
  const articles = [
    {
      title: "How Technology is Transforming East African Communities",
      excerpt: "Exploring the impact of digital innovation on local communities and economies in East Africa.",
      author: "John Doe",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "technology-transforming-east-africa",
      category: "Technology"
    },
    {
      title: "The Rise of Women in Tech: SwahiliPot's Impact",
      excerpt: "How our Swahili Tech Women program is helping bridge the gender gap in technology fields.",
      author: "Jane Smith",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "women-in-tech-swahilipot-impact",
      category: "Women in Tech"
    },
    {
      title: "Preserving Cultural Heritage Through Digital Means",
      excerpt: "How technology is being used to document and preserve traditional Swahili culture for future generations.",
      author: "Mary Johnson",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "preserving-culture-through-digital",
      category: "Arts & Culture"
    },
    {
      title: "Youth Innovation: Success Stories from Our Hub",
      excerpt: "Highlighting the achievements of young entrepreneurs who started their journey at SwahiliPot Hub.",
      author: "David Mwangi",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "youth-innovation-success-stories",
      category: "Success Stories"
    },
    {
      title: "The Future of Education in East Africa",
      excerpt: "How digital learning and skills development are reshaping educational opportunities for youth.",
      author: "Sarah Ochieng",
      date: "February 20, 2025",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "future-education-east-africa",
      category: "Education"
    },
    {
      title: "Building Sustainable Tech Communities",
      excerpt: "Lessons learned from creating and nurturing a thriving technology ecosystem in Mombasa.",
      author: "Robert Kimani",
      date: "February 15, 2025",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "building-sustainable-tech-communities",
      category: "Community"
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        {/* Display all 6 articles in a single grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              image={article.image}
              slug={article.slug}
              category={article.category}
            />
          ))}
        </div>

        {/* "More" button linking to Medium */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex">
            <a
              href="https://medium.com/@swahilipotengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-500 border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Read more
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
