"use server"

export default async function ComponentUseServer() {

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

const post = await response.json()

  return (
    <div>
      <h2>Post:</h2>
      <ul>
        <li>
          <p><b>Titre</b>: {post.title}</p>
          <p><b>Description</b>: {post.body}</p>
        </li>
      </ul>
    </div>
  )
}
