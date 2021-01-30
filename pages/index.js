import {useEffect, useState} from 'react';
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api/user'

const Home = () => {

  return (
    <>
      <h1>This is home page</h1>
      <Link href="post">
          <button>Goto post page</button>
      </Link>
    </>
  )
}

export default Home
