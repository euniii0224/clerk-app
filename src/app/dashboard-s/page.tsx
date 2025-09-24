import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated } = await auth()

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (Server-side)</h1>
      <div className="mb-5">
        <p>서버측에서 auth, currentUser 함수 이용</p>
        <p>Welcome, {user?.firstName}!</p>
        <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        <p>사용자 등록: {user?.createdAt}</p>
      </div>
    </div>
  )
}
