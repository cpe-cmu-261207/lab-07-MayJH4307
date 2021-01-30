import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api/user'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    const fetch = async () => {
        if(postId){
            const response = await axios.get(
            baseURL,
            {
              headers: {
                 'app-id' : '60155b1129a32e0319672e4a'
              }  
        })
        setPost(response.data.data)
        }
    } 
    useEffect(fetch,[postId])

    return (
        <>
            <h1>display post data from api here</h1>
            {post !== null ? (
                <div>
                <p>post : {post.text}</p>
                <img src={post.picture}/>
                <p>Likes : {post.likes}</p>
              </div>
            ):null}
            <Link href="/post">
                Back
            </Link>
        </>
    )
}

export  default  Post

