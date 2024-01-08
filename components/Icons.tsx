import React from "react";

import type { PropsWithChildren } from "react";
import { Entypo } from "@expo/vector-icons";

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case "circle":
      return <Entypo name="circle" size={24} color="black" />;

    case "cross":
      return <Entypo name="cross" size={24} color="black" />;

    default:
      return <Entypo name="pencil" size={24} color="black" />;
  }
};

export default Icons;
