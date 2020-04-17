import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import Item from "./item";
import { useForm } from "react-hook-form";
import InputBar from "./inputBar";
import { AnimatePresence, motion } from "framer-motion";

export default function Main({ open, toggleDrawer }) {
  // displayed time on info section
  const [totalMilliSeconds, setTotalMilliSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [active, setActive] = useState(0);
  // dummy data
  const [items, setItems] = useState([
    { title: "coding", description: "small projects", totalSeconds: 0 },
    { title: "cooking", description: "fish and chips", totalSeconds: 0 },
    { title: "rest", description: "inside all day", totalSeconds: 0 },
    { title: "debugging", description: "many problems", totalSeconds: 0 },
    { title: "sleeping", description: "rough night", totalSeconds: 0 },
  ]);
  // form validation
  const { register, handleSubmit } = useForm();

  //animation
  const variants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  /**
   * remove timer
   * @param item
   * @param idx
   */
  const removeItemAtIndex = (item, idx) => {
    console.log(`removed index : ${idx}`, item);
    items.splice(idx, 1);
    // if (idx === 0 && items.length === 1) return;
    setItems((items) => [...items]);
  };

  /**
   * add new timer component
   * @param e
   * @param i
   */
  const onSubmit = (e, i) => {
    console.log("added : ", e);
    const newItems = [...items];
    newItems.splice(i + 1, 0, e);
    setItems(newItems);
  };

  /**
   * handle when ENTER key is pressed
   * @param e
   * @param i
   */
  const handleKeyDown = (e, i) => {
    // console.log(i);
    if (e.keyCode === 13) {
      onSubmit(e, i);
    }
  };

  /**
   * update name of title and description
   * @param e
   * @param i
   */
  const updateItemAtIndex = (e, i) => {
    const newItem = [...items];
    newItem[i].description = e.target.value;
    setItems(newItem);
  };

  useEffect(() => {
    setActive((active) => items.length);
  });

  return (
    <AnimatePresence onExitComplete>
      <motion.div
        key={"main"}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={variants}
        className="main"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.2 },
        }}
      >
        <InputBar
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          keyDown={handleKeyDown}
          totalMilliSeconds={totalMilliSeconds}
          totalSeconds={totalSeconds}
          totalMinutes={totalMinutes}
          active={active}
        />
        {items.length >= 1
          ? items.map((item, index) => (
              <Item
                idx={index}
                totalMilliSeconds={totalMilliSeconds}
                setTotalMilliSeconds={setTotalMilliSeconds}
                totalSeconds={totalSeconds}
                setTotalSeconds={setTotalSeconds}
                totalMinutes={totalMinutes}
                setTotalMinutes={setTotalMinutes}
                remove={() => removeItemAtIndex(item, index)}
                key={index}
                {...item}
              />
            ))
          : "nothing here"}
      </motion.div>
    </AnimatePresence>
  );
}
