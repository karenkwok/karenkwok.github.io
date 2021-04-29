import "./Project.scss";

function Project(props) {
  return (
    <div className="project-square">
      {/* {props.name} */}
      <img src={props.image} />
    </div>
  );
}

export default Project;
