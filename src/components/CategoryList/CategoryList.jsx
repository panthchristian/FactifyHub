import React, {useState, useMemo, useEffect} from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

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
  

export default function CategoryList({ setCurrentCategory }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["all"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  useEffect(() => {
    setCurrentCategory(selectedValue);
  }, [selectedKeys]);
  return (
    <div className="flex flex-col gap-2 px-4">
      <ListboxWrapper>
        <Listbox 
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          defaultSelectedKeys="all"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem key="all">ALL</ListboxItem>
             {CATEGORIES.map((category) => (
              <ListboxItem key={category.name}>
                {category.name.toUpperCase()}
              </ListboxItem>
            ))}
          {/* <ListboxItem key="text">Text</ListboxItem>
          <ListboxItem key="number">Number</ListboxItem>
          <ListboxItem key="date">Date</ListboxItem>
          <ListboxItem key="single_date">Single Date</ListboxItem>
          <ListboxItem key="iteration">Iteration</ListboxItem> */}
        </Listbox>
      </ListboxWrapper>
      {/* <p className="text-small text-default-500">Selected: {selectedValue}</p>

      <hr /> */}


    </div>
  );
}
