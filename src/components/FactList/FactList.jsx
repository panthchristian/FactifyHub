import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import Fact from "../Fact/Fact";


const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" }
  ];

export default function FactList({ facts, setFacts }) {
    if (facts.length === 0) {
        return (
          <p className="text-center text-lg font-semibold my-8">
            No facts for this category yet! create the first one{" "}
            <span role="img" aria-label="peace sign">
              ✌
            </span>
            .
          </p>
        );}

  return (
    <ScrollShadow className="max-h-[92vh] pb-12">
        {facts.map((fact) => {
          const category = CATEGORIES.find((cat) => cat.name === fact.category);
          const tagStyle = { backgroundColor: category ? category.color : "" };
          return (
            <Fact
              key={fact.id}
              tagStyle={tagStyle}
              factObj={fact}
              setFacts={setFacts}
            />
          );
        })}
        {/* <Fact /> */}
    </ScrollShadow>
  );
}
