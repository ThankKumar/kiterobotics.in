"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050914] text-white">
      <div className="max-w-xl text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
        <pre className="text-xs text-red-300 break-words">{String(error?.message || error)}</pre>
        <div className="mt-6">
          <button
            onClick={() => typeof reset === "function" && reset()}
            className="px-4 py-2 bg-blue-600 rounded text-white"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
