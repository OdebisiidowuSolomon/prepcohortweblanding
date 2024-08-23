import React from "react";

const CustomAvatar = ({
  size = 28,
  textSize = 10,
  name,
}: {
  size?: number;
  textSize?: number;
  name: string;
}) => {
  const getName = (name: string) => {
    // console.log(name.split(' '));

    if (name.trim().split(" ").length > 1) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("");
    } else {
      return name.slice(0, 2);
    }
  };

  return (
    <div
      style={{
        height: size,
        width: size,
        background: "#254293",
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        display: "flex",
      }}
      className=""
    >
      <p className="" style={{ fontSize: textSize, color: "white" }}>
        {name ? getName(name).toUpperCase().slice(0, 2) : "A"}
      </p>
    </div>
  );
};

export default CustomAvatar;

export const GetAbbrv = (text: string) => {
  return text
    .split(" ")
    .map((i) => i[0])
    .join("");
};
