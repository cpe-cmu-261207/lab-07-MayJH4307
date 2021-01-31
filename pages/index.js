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
      <Link href="/Portfolio">
          <button>Porfolio</button>
      </Link>
      <Link href="/CalGPA">
          <button>Calculate GPA</button>
      </Link>
      <Link href="/port">
          <button>port</button>
      </Link>
    </>
  )
}

export default Home
