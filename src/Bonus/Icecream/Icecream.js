import "./Icecream.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import qq4 from "./Pictures/qq4.jpg";
import qq3 from "./Pictures/qq3.jpg";
import wonderland from "./Pictures/wonderland.jpg";
import mandarin2 from "./Pictures/mandarin2.jpg";
import soulcafe from "./Pictures/soulcafe.jpg";
import tbearwaffle from "./Pictures/tbearwaffle.jpg";
import mcdonalds from "./Pictures/mcdonalds.jpg";
import cafeprincess from "./Pictures/cafeprincess.jpg";
import dutchdreams from "./Pictures/dutchdreams.jpg";
import koishi from "./Pictures/koishi.jpg";
import pablocheese from "./Pictures/pablocheese.jpg";
import acm from "./Pictures/acm.jpg";
import peacetreats2 from "./Pictures/peacetreats2.jpg";
import peacetreats from "./Pictures/peacetreats.jpg";
import qq2 from "./Pictures/qq2.jpg";
import petitpotato from "./Pictures/petitpotato.jpg";
import taiyakinyc2 from "./Pictures/taiyakinyc2.jpg";
import snowtime4 from "./Pictures/snowtime4.jpg";
import snowtime3 from "./Pictures/snowtime3.jpg";
import mandarin from "./Pictures/mandarin.jpg";
import taiyakinyc from "./Pictures/taiyakinyc.jpg";
import fugo2 from "./Pictures/fugo2.jpg";
import snowtime2 from "./Pictures/snowtime2.jpg";
import dearfro from "./Pictures/dearfro.jpg";
import qq from "./Pictures/qq.jpg";
import snowtime from "./Pictures/snowtime.JPG";
import ihalokrunch from "./Pictures/ihalokrunch.JPG";
import fugo from "./Pictures/fugo.JPG";

class IcecreamData {
  constructor(image, name, location, date) {
    this.image = image;
    this.name = name;
    this.location = location;
    this.date = date;
  }
}

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function Icecream() {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [clickedIcecream, setClickedIcecream] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let dialog;
  if (clickedIcecream) {
    dialog = (
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {clickedIcecream.name}
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={clickedIcecream.image}
            className="icecream-gallery-inside-picture"
          />
          <Typography gutterBottom>
            <i class="fas fa-map-marker-alt"></i>&nbsp;{" "}
            {clickedIcecream.location}
          </Typography>
          <Typography gutterBottom>
            <i class="far fa-calendar-alt"></i>&nbsp; {clickedIcecream.date}
          </Typography>
        </DialogContent>
      </Dialog>
    );
  }

  window.scrollTo({
    top: 0,
  });

  const icecreams = [
    new IcecreamData(qq4, "Men N Black", "QQ Thai Ice Cream", "February 2020"),
    new IcecreamData(qq3, "Pink Lady", "QQ Thai Ice Cream", "January 2020"),
    new IcecreamData(
      wonderland,
      "Classic Funnel Cake",
      "Canada's Wonderland",
      "December 2019"
    ),
    new IcecreamData(mandarin2, "MY CREATION 2.0", "Mandarin", "November 2019"),
    new IcecreamData(
      soulcafe,
      "Watermelon Shaved Ice",
      "Soul Cafe",
      "August 2019"
    ),
    new IcecreamData(
      tbearwaffle,
      "Black Jack Bear Waffle",
      "T-Bear",
      "July 2019"
    ),
    new IcecreamData(mcdonalds, "Vanilla Cone", "McDonald's", "July 2019"),
    new IcecreamData(
      cafeprincess,
      "Unicorn Sulbing",
      "Café Princess",
      "June 2019"
    ),
    new IcecreamData(
      dutchdreams,
      "Orange Sherbet & Watermelon Sherbet",
      "Dutch Dreams",
      "May 2019"
    ),
    new IcecreamData(koishi, "Ichigo Miso", "Koishi", "May 2019", "comment"),
    new IcecreamData(
      pablocheese,
      "Cheese Soft Serve",
      "Pablo Cheese Tart",
      "May 2019"
    ),
    new IcecreamData(
      acm,
      "KAREN, YOU'VE OUTDONE YOURSELF.",
      "ACM Waffle Brunch",
      "April 2019"
    ),
    new IcecreamData(
      peacetreats2,
      "GO SHAWTY, ITS YOUR BIRTHDAY",
      "Peace Treats",
      "April 2019"
    ),
    new IcecreamData(
      peacetreats,
      "GO SHAWTY, ITS YOUR BIRTHDAY",
      "Peace Treats",
      "April 2019"
    ),
    new IcecreamData(qq2, "Blue Magic & QQ", "QQ Thai Ice Cream", "April 2019"),
    new IcecreamData(
      petitpotato,
      "Oreo Special Golden Toast",
      "Petit Potato",
      "March 2019"
    ),
    new IcecreamData(
      taiyakinyc2,
      "Vanilla Mango Taiyaki",
      "Taiyaki NYC",
      "December 2018"
    ),
    new IcecreamData(
      snowtime4,
      "Mango Bingsoo & Oreo Bingsoo",
      "Snow Time",
      "November 2018"
    ),
    new IcecreamData(
      snowtime3,
      "Mango Bingsoo & Oreo Bingsoo",
      "Snow Time",
      "November 2018"
    ),
    new IcecreamData(mandarin, "MY CREATION", "Mandarin", "November 2018"),
    new IcecreamData(
      taiyakinyc,
      "Unicorn Taiyaki",
      "Taiyaki NYC",
      "November 2018"
    ),
    new IcecreamData(fugo2, "Cookies N' Dreams", "Fugo Desserts", "May 2018"),
    new IcecreamData(snowtime2, "Oreo Bingsoo", "Snow Time", "April 2018"),
    new IcecreamData(
      dearfro,
      "Matcha Cheese Jelly Bingsu",
      "Dear&Fro",
      "February 2018"
    ),
    new IcecreamData(
      qq,
      "Taro Taro & Mango Tango",
      "QQ Thai Ice Cream",
      "January 2018"
    ),
    new IcecreamData(snowtime, "Oreo Bingsoo", "Snow Time", "December 2017"),
    new IcecreamData(ihalokrunch, "Ubenut", "iHalo Krunch", "November 2017"),
    new IcecreamData(fugo, "Cookie Monster", "Fugo Desserts", "October 2017"),
  ];

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">Just a girl who loves ice cream.</h2>
        <Button variant="outlined" size="large" onClick={history.goBack}>
          <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Back
        </Button>
      </div>
      <h4>
        A gallery of my ice cream adventures with friends. Currently on
        indefinite hiatus due to the ongoing pandemic. 😭
      </h4>
      <h4>&nbsp;</h4>
      <div id="icecream-gallery">
        {icecreams.map((oneIcecream) => {
          return (
            <img
              src={oneIcecream.image}
              onClick={() => {
                setClickedIcecream(oneIcecream);
                handleClickOpen();
              }}
            />
          );
        })}
      </div>
      {dialog}
    </div>
  );
}

export default Icecream;
