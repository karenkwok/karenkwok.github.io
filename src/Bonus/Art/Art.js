import "./Art.scss";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Tab, Tabs, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

import basilica from "./Sketchbook/01_basilica.jpg";
import original from "./Sketchbook/01_original.jpg";
import elephant from "./Sketchbook/02_elephant.jpg";
import cats from "./Sketchbook/03_cats.jpg";
import fashion from "./Sketchbook/04_fashion.jpg";
import stegosaurus from "./Sketchbook/05_stegosaurus.jpg";
import woman from "./Sketchbook/06_woman.jpg";
import bird from "./Sketchbook/07_bird.jpg";
import flowers from "./Sketchbook/08_flowers.jpg";

class SketchbookData {
  constructor(image, age, date) {
    this.image = image;
    this.age = age;
    this.date = date;
  }
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sketchbooks = [
    new SketchbookData(basilica, "16", "May 2015"),
    new SketchbookData(original, "16", "May 2015"),
    new SketchbookData(elephant, "15 to 16", "November 2014"),
    new SketchbookData(cats, "15", "June 2014"),
    new SketchbookData(fashion, "13 to 14", "2012-2013"),
    new SketchbookData(stegosaurus, "13", "June 2012"),
    new SketchbookData(woman, "12 to 13", "2011-2012"),
    new SketchbookData(bird, "10 to 11", "2009"),
    new SketchbookData(flowers, "10", "May 2009"),
  ];
  
  return (
    <Paper className={classes.root}>
      <h4></h4>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Paintings" />
        <Tab label="Sketchbook" />
        <Tab label="About" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div id="sketchbook-gallery">{sketchbooks.map((sketch) => {
          return (
            <img src={sketch.image} />
          );
        })}</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h4>
          I've always had an immense love of vibrant colours, doodling, and
          just letting my imagination roam free.
        </h4>
        <h4>
          As a kid, I took art lessons under various instructors in drawing,
          painting, and briefly, clay sculpting (I was really bad at
          this). Eventually, I found a teacher who was not only an incredibly
          gifted artist, but also a wise and compassionate mentor and friend,
          who always encouraged me to find my own style and be myself. All my
          works listed here have been brought to life under his tutelage.
        </h4>
        <h4>
          After over 10 years of art lessons, I made the difficult decision to
          quit. I was in senior year of high school so I had to get my grades up
          for university, while furiously practicing for my level 10 piano exam.
          I just couldn't do it all at once. With a heavy heart, I gave away all
          my paints and brushes.
        </h4>
        <h4>
          And here I am now.
        </h4>
      </TabPanel>
    </Paper>
  );
}

function Art() {
  const history = useHistory();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">A Retired Painter's Portfolio</h2>
        <Button variant="outlined" size="large" onClick={history.goBack}>
          <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;Back
        </Button>
      </div>
      <CenteredTabs></CenteredTabs>
    </div>
  );
}

export default Art;
