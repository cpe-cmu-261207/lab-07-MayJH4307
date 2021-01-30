import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api/user'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect (() => {
        const fetch = async () => {
          setLoading(true)
          const response = await axios.get(
            baseURL ,
            {
              headers: {
                 'app-id': '60155b1129a32e0319672e4a'
              }  
            })
          
          console.log(response.data)
          setPosts(response.data.data)
          setLoading(false)
        }
        fetch()
      },[])
/*`${baseURL}/post` */

    return (
        <>
            <h1>All Posts</h1>
            {loading && <p>Loading...</p>}
            {/*posts.map(post => 
                <p>{post.firsstName} {post.lastname}</p>
            )*/}
            {
              posts.map(post => (
                <div>
                  <p>post : {post.text}</p>
                  <img src={post.picture}/>
                  <p>Likes : {post.likes}</p>
                  <Link key={post.id} href={`/post/${post.id}`}>
                    <button>go to this page</button>
                  </Link>
                </div>
              ))
            }
        </>
    )
}

export default  Posts
