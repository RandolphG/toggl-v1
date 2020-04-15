import React from "react";
import "antd/dist/antd.css";
import { ListItem, List } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import Paper from "@material-ui/core/Paper";
import Timer from "./timer";

const variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

function Item({ title, description, remove, idx }) {
  console.log(idx);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="motion-div"
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={variants}
      >
        <List className="list" component="nav">
          <Paper className="paper">
            <ListItem className="list-item">
              <div className="list-details">
                <div className="number">{idx + 1}</div>
                <div className="list-info">
                  <span className="name">{title}</span>
                  <span className="description">{description}</span>
                </div>
                <span className="time">
                  <Timer remove={remove} />
                </span>
              </div>
            </ListItem>
          </Paper>
        </List>
      </motion.div>
    </AnimatePresence>
  );
}

export default Item;
