import Link from 'next/link'
const homepage = () => {
    return (
        <>
            <h1>Sunisa Deeratram</h1>
            <h2>Profile</h2>
            <h3>Personal</h3>
            <table>
            <tr>
                <td><b>Name :</b></td>
                <td>Sunisa Deeratram (nickname May)</td>
            </tr>
            <tr>
                <td><b>Date :</b></td>
                <td>Saturday 18th December</td>
            </tr>
            <tr>
                <td><b>Address :</b></td>
                <td>The cupboard under the Stairs</td>
            </tr>
            <tr>
                <td><b>Tele. :</b></td>
                <td>095-5072677</td>
            </tr>
            <tr>
                <td><b>Email :</b></td>
                <td>norit.hunhan@hotmail.com</td>
            </tr>
            </table>
            <h3>Education</h3>
            <table>
                <tr>
                    <td><b>College :</b></td>
                    <td>Chiang Mai University(at second year)</td>
                </tr>
            </table>
            <h3>Work Experience</h3>
            <table>
                <tr>
                    <td>Dont have</td>
                </tr>
            </table>
            <Link href="/port">
            <button>Back</button>
            </Link>
        </>
    )
}

export default homepage