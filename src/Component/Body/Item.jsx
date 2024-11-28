import React from "react";

const Item = (props) => {
  const { title, content, icon } = props.data;

  return (
    <div className="card border-0 col-xl-4 col-lg-6 col-sm-12 col text-center mb-7 ">
      <div className="icon">
        <i style={{ fontSize: "20px" }} className={icon}></i>
      </div>
      <div style={{ height: "11rem" }} className=" bg-light rounded-lg p-4">
        <h3 className="font-weight-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Item;
