import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

function ThreeDCardDemo2() {
  return (
    React.createElement(CardContainer, { className: "inter-var" },
      React.createElement(CardBody, { className: "bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  " },
        React.createElement(CardItem, { translateZ: "50", className: "text-xl font-bold text-neutral-600 dark:text-white" },
          "Make things float in air"
        ),
        React.createElement(CardItem, { as: "p", translateZ: "60", className: "text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300" },
          "Hover over this card to unleash the power of CSS perspective"
        ),
        React.createElement(CardItem, { translateZ: "100", rotateX: 20, rotateZ: -10, className: "w-full mt-4" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: "1000",
            width: "1000",
            className: "h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",
            alt: "thumbnail"
          })
        ),
        
        )
      )
    )
}

export default ThreeDCardDemo2;
