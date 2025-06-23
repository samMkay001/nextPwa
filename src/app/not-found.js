import Link from "next/link";

export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link href="/staticsite" className="text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
