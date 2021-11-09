import "./Project.scss";

function Project(props) {
  return (
    <div className="project-square">
      <div className="project-title">{props.name}</div>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Project;
