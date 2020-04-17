import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CheckIcon from "@material-ui/icons/Check";
import PortraitIcon from "@material-ui/icons/Portrait";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  email: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const [value, setTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
  }

  /**
   *
   * @param data
   */
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="App">
          <div className="login-header">toggl v0.1</div>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Login" icon={<CheckIcon />} {...a11yProps(0)} />
                <Tab
                  label="Create Account"
                  icon={<PortraitIcon />}
                  {...a11yProps(2)}
                />
                />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={classes.email}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  inputRef={register({ required: true, minLength: 8 })}
                  type={"email"}
                  name={"email"}
                  style={{ margin: "16px 0px" }}
                  label={
                    errors.email ? "Please enter password" : "Email Address"
                  }
                  fullWidth
                />
                <TextField
                  inputRef={register}
                  type={"password"}
                  name={"password"}
                  style={{ margin: "16px 0px" }}
                  label={errors.password ? "please enter password" : "Password"}
                />
                <Button
                  style={{
                    background: "black",
                    color: "white",
                    marginTop: "56px",
                  }}
                  fullWidth={true}
                  variant="outlined"
                  size="large"
                  type={"submit"}
                >
                  log in
                </Button>
              </form>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <form className={classes.email} noValidate autoComplete="off">
                <TextField
                  style={{ margin: "16px 0px" }}
                  id="standard-basic"
                  label="Email Address"
                />
                <TextField
                  style={{ margin: "16px 0px" }}
                  id="standard-basic"
                  label="Password"
                />
                <TextField
                  style={{ margin: "16px 0px" }}
                  id="standard-basic"
                  label="Confirm password"
                />
                <Button
                  style={{
                    background: "black",
                    color: "white",
                    marginTop: "56px",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Register
                </Button>
              </form>
            </TabPanel>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Login;
