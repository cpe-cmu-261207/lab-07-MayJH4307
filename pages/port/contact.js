import Link from 'next/link'

const contact = () => {

    return (
      <>
        <h1 style={{textAlign: 'center'}}>Sunisa Deeratram</h1>
        <h2 style={{textAlign: 'center'}}>Contact</h2>
        <form action="#">
        <table style={{margin: 'auto'}}>
            <tr>
                <td><label for="Subject">Subject : </label></td>
                <td><input type="text" id="Subject" name="Subject"/></td>
            </tr>
            <tr>
                <td><label for="Mes">Message : </label></td>
                <td><textarea name="msg" ></textarea></td>
            </tr>
            <tr>
                <td><label for="Name">Name : </label></td>
                <td><input type="text" id="Name" name="Name"/></td>
            </tr>
            <tr>
                <td>Gender :</td>
                <td>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label>
                    <input type="radio" id="not" name="gender" value="not"/>
                    <label for="not">Not your Bussiness</label>
                </td>
            </tr>
            <tr>
                <td><label for="Phone">Phone : </label></td>
                <td><input type="text" id="Phone" name="Phone"/></td>
            </tr>
            <tr>
                <td><label for="Email">Email : </label></td>
                <td><input type="text" id="Email" name="Email"/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Submit"/></td>
            </tr>
        </table>
        </form>
        <Link href="/port">
            <button>Back</button>
        </Link>
      </>
    )
  }
  
  export default contact