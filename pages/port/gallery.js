import Link from 'next/link'

const gallery = () => {
    return (
        <>
            <div id="divGal"><h1 style={{textAlign: 'center'}} id="name">Sunisa Deeratram</h1></div>
                <table style={{margin: 'auto'}}>
                    <tr>
                        <td><img width='300px' height='250px' src="/image/p2.png"/></td>
                        <td><img width='300px' height='250px' src="/image/m1.jpg"/></td>
                        <td><img width='300px' height='250px' src="/image/m6.png"/></td>
                    </tr>
                    <tr>
                        <td style={{width: '100px',height: '100px'}}></td>
                        <td style={{width: '100px',height: '100px'}}>It's Me(Last year in christmas day)</td>
                        <td style={{width: '100px',height: '100px'}}></td>
                    </tr>
                    <tr>
                        <td><img width='300px' height='250px' src="/image/m6.png"/></td>
                        <td><img width='300px' height='250px' src="/image/m2.jpg"/></td>
                        <td><img width='300px' height='250px' src="/image/p2.png"/></td>
                    </tr>
                    <tr>
                        <td style={{width: '100px',height: '100px'}}></td>
                        <td style={{width: '100px',height: '100px'}}>I like this pic bc i think it's a montage that look like a real pic ,are you think so?</td>
                        <td style={{width: '100px',height: '100px'}}></td>
                    </tr>
                    <tr>
                        <td><img width='300px' height='250px' src="/image/p2.png"/></td>
                        <td><img width='300px' height='250px' src="/image/m3.jpg"/></td>
                        <td><img width='300px' height='250px' src="/image/m6.png"/></td>
                    </tr>
                    <tr>
                        <td style={{width: '100px',height: '100px'}}></td>
                        <td style={{width: '100px',height: '100px'}}>It's my grade in last semester ,i want to show grade that i receive from F**k Subject </td>
                        <td style={{width: '100px',height: '100px'}}></td>
                    </tr>
                </table>
                <Link href="/port">
                    <button>Back</button>
                </Link>
        </>
    )
}

export default gallery