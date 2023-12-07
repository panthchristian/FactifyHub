import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export default function FactForm({ setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  function handleSubmit(e) {
    // prevent browser reload
    e.preventDefault();
    console.log(text, source, category);

    if (text && source && category && textLength <= 200) {
      // setIsUploading(true);
      // setTimeout(2000);
      // setIsUploading(false);

      // setText("");
      // setSource("");
      // setCategory("");

      // setShowForm(false);

      setIsUploading(true);

      // Corrected setTimeout with a callback function
      setTimeout(() => {
        setText("");
        setSource("");
        setCategory("");
        setIsUploading(false);
        // Assuming you have setShowForm defined somewhere
        setShowForm(false);
      }, 1000);
    }
  }
  return (
    <Card className="m-6 w-10/12 mx-auto p-4 shadow-[0px_40px_64px_-32px_rgba(15,15,15,0.1)] dark:shadow-[0px_40px_64px_-32px_rgba(35, 38, 47,0.1)">
      <CardBody>
        <form method="post">
          <Input
            className="my-2 "
            disabled={isUploading}
            type="text"
            size="lg"
            variant="bordered"
            value={text}
            label={`Length: ${200 - textLength}`}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share a fact with the world..."
          />
          <Input
            className="my-2 "
            disabled={isUploading}
            type="url"
            size="lg"
            label="Source"
            value={source}
            placeholder="Trustworthy source..."
            variant="bordered"
            onChange={(e) => setSource(e.target.value)}
            // startContent={
            //   <div className="pointer-events-none flex items-center">
            //     <span className="text-default-400 text-small">
            //       https://
            //     </span>
            //   </div>
            // }
          />
          <Select
            className="my-2 "
            disabled={isUploading}
            variant="bordered"
            size="lg"
            label="Select a category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((categoty) => (
              <SelectItem key={categoty.name} value={categoty.name}>
                {categoty.name.toUpperCase()}
              </SelectItem>
            ))}
          </Select>
          <Button
            size="lg"
            disabled={isUploading}
            radius="full"
            className="bg-[#3B71FE] hover:bg-[#225ffe] w-full font-bold py-4 my-2  self-center"
            color="primary"
            variant="solid"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
