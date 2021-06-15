import "./Art.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Art() {
  const history = useHistory();

  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">A Retired Painter's Portfolio</h2>
        <Button variant="outlined" size="large" onClick={history.goBack}>
          <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Back
        </Button>
      </div>
      <h4>
        I've always had an immense love for vibrant colours, doodling, and just
        letting my imagination roam free.
      </h4>
      <h4>
        As a kid, I took art lessons under various instructors in drawing, oil
        painting, and briefly, clay sculpting (I was really bad at that).
        Eventually, I found a teacher who was not only an incredibly gifted
        artist, but also a wise and compassionate mentor and friend, who always
        encouraged me to find my own style and be myself. All my works below
        have been brought to life under his tutelage.
      </h4>
      <h4>
        After over 10 years of art lessons, I made the difficult decision to
        quit. I was in senior year of high school so I had to get my grades up
        for university, while furiously practicing for my level 10 piano exam. I
        just couldn't do it all at once. With a heavy heart, I gave away all my
        paints and brushes.
      </h4>
      <h4>Perhaps one day, I'll pick up a brush and start painting again...</h4>
    </div>
  );
}

export default Art;
