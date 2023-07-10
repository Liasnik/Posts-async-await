import { useEffect } from 'react'
import Post from './Post'
import { useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [isLoding, setIsLoding] = useState(true)

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((result) => result.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoding(false))
  //   setError('') // мне кажется лучше очистить
  // }, [])

  useEffect(() => {
    const fetchPosts = async (URL) => {
      try {
        const response = await fetch(URL)
        const postsArr = await response.json()
        setPosts(postsArr)
      } catch (error) {
        setError(error.message)
      }
      setIsLoding(false)
    }
    setError('')
    fetchPosts(API_URL)
  }, [])

  // useEffect(() => {
  //   ;(async function () {
  //     try {
  //       const response = await fetch(API_URL)
  //       const postsArr = await response.json()
  //       setPosts(postsArr)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //     setIsLoding(false)
  //   })() // IIFI
  // }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoding ? (
        <h3>Loding...</h3>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
      {/* Без использования useState можно навено сделать: */}
      {/* {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            <Post {...post} />
          </div>
        ))
      ) : (
        <h3>Loding...</h3>
      )} */}
    </>
  )
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts'
