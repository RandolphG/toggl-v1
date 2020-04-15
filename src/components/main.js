import React, { useState } from "react";
import "antd/dist/antd.css";
import Item from "./item";
import { useForm } from "react-hook-form";
import InputBar from "./inputBar";
import BottomAppBar from "./bottomAppBar";

function Main() {
  const [items, setItems] = useState([
    { title: "Title", description: "description" },
    { title: "Title", description: "description" },
    { title: "Title", description: "description" },
    { title: "Title", description: "description" },
    { title: "Title", description: "description" },
  ]);

  const { register, handleSubmit } = useForm();

  const removeItemAtIndex = (idx) => {
    console.log("remove", idx);
    items.splice(idx, 1);
    if (idx === 0 && items.length === 1) return;
    setItems((items) => [...items]);
  };

  return (
    <div className="main">
      <InputBar
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        keyDown={handleKeyDown}
      />
      {items.length >= 1
        ? items.map((item, index) => (
            <Item
              idx={index}
              remove={() => removeItemAtIndex(index)}
              key={index}
              {...item}
            />
          ))
        : "nothing here"}
      <BottomAppBar />
    </div>
  );

  function onSubmit(e, i) {
    console.log(e);
    const newItems = [...items];
    newItems.splice(i + 1, 0, e);
    setItems(newItems);
  }

  function handleKeyDown(e, i) {
    console.log(i);
    if (e.keyCode === 13) {
      onSubmit(e, i);
    }
  }

  function updateItemAtIndex(e, i) {
    const newItem = [...items];
    newItem[i].description = e.target.value;
    setItems(newItem);
  }
}

export default Main;
