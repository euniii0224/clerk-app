import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold">Welcome Home</h1>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://clerk.com/"
          className="text-xl text-blue-700 font-bold"
        >
          clerk.com
        </Link>
        <p className="mb-2">
          This is a demo of Clerk authentication. Clerk is more than a sign-in
          box. Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://api.github.com/"
          className="text-xl text-blue-700 font-bold"
        >
          api.github.com
        </Link>
        <p className="mb-2">Explore github repositories using Fetch API</p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="/api/courses" className="text-xl text-blue-700 font-bold">
          Backend API
        </Link>
        <p className="mb-2">
          Provide Backend API service that provide extensive courses information
          in web development
        </p>
      </div>
    </>
  )
}
