import { useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
}
interface BlogProps {
  posts: Post[]
}
const Divider = () => <hr className="border-t-[1px] border-gray-900" />
export default function PostPage({ posts }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <h1 className="text-red-600">Blog </h1>
      <input type="text" placeholder="Search posts" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {searchTerm.length > 0 &&
          filteredPosts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Divider />
            </li>
          ))}
      </ul>
    </div>
  )
}
