import { NextPage } from 'next';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-xl">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 btn"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

// TypeScript is expecting the return value to be `ErrorProps` and not `number | undefined`.
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode ?? 404 }; // Ensure the statusCode is always a number
};

export default Error;
