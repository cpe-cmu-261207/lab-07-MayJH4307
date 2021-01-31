const CourseCard = (props) => {
  return (
    <>
      <table id="tab">
        <tbody>
          <tr>
            <td id="fst">
              <p>{props.name}</p>
              <p>Unit : {props.crd}</p>
              <p>Grade : {props.grd}</p>
            </td>
            <td id="but"><button onClick = {() =>props.del(props.name)} > delete </button></td>
          </tr>
        </tbody>
      </table>
      <br/>
    </>
  );
};

export default CourseCard;
