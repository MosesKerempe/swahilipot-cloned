import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn">
          Go back home
        </Link>
      </div>
    </div>
  );
}