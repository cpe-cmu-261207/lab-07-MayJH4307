import Link from 'next/link'

const port = () => {

    return (
      <>
        <h1>This is my Portfolio</h1>
        <Link href="/port/homepage">
            <button>Goto Homepage</button>
        </Link>
        <Link href="/port/gallery">
            <button>Goto Gallery</button>
        </Link>
        <Link href="/port/contact">
            <button>Goto Contact</button>
        </Link>
        <Link href="/">
            <button>Back</button>
        </Link>
      </>
    )
  }
  
  export default port