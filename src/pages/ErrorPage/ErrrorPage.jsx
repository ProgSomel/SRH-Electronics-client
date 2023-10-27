

const ErrrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-4xl text-gray-800 font-semibold">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, the page you're looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">Go Home</a>
      </div>
    </div>
    );
};

export default ErrrorPage;