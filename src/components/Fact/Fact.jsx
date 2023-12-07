import { Card, CardBody, Link, Chip, Button } from "@nextui-org/react";
import { useState } from "react";
import supabase from "../../../supabase";

const CATEGORIES = [
  { name: "Technology", color: "#3772FF" },
  { name: "Science", color: "#45B26B" },
  { name: "Finance", color: "#EF466F" },
  { name: "Society", color: "#FFBC00" },
  { name: "Entertainment", color: "#be87ff" },
  { name: "Health", color: "#22d3ee" },
  { name: "History", color: "#FF592C" },
  { name: "News", color: "#735ffa" },
];

const styleFalse = {
  "--fa-secondary-opacity": 1,
};

const stylePrimary = {
  "--fa-primary-opacity": 0.5,
  "--fa-secondary-opacity": 1,
};

export default function Fact({ factObj, tagStyle, setFacts }) {
  const [isAmazing, setIsAmazing] = useState(false);
  const [isMindblowing, setIsMindblowing] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    (factObj.votesInteresting + factObj.votesMindblowing) < factObj.votesFalse;

  async function handleAmazing() {
    // Trigger the animation
    setIsAmazing(true);

    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ ["votesInteresting"]: factObj["votesInteresting"] + 1 })
      .eq("id", factObj.id)
      .select();

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === factObj.id ? updatedFact[0] : f))
      );
    setIsUpdating(false);

    // Remove the animation after 1 second
    setTimeout(() => {
      setIsAmazing(false);
    }, 1000);
  }

  async function handleMindblowing() {
    // Trigger the animation
    setIsMindblowing(true);

    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ ["votesMindblowing"]: factObj["votesMindblowing"] + 1 })
      .eq("id", factObj.id)
      .select();

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === factObj.id ? updatedFact[0] : f))
      );
    setIsUpdating(false);

    // Remove the animation after 1 second
    setTimeout(() => {
      setIsMindblowing(false);
    }, 1000);
  };

  async function handleFalse() {
    // Trigger the animation
    setIsFalse(true);

    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ ["votesFalse"]: factObj["votesFalse"] + 1 })
      .eq("id", factObj.id)
      .select();

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === factObj.id ? updatedFact[0] : f))
      );
    setIsUpdating(false);

    // Remove the animation after 1 second
    setTimeout(() => {
      setIsFalse(false);
    }, 1000);
  };

  async function handleVote(columnName) {
   
  }

  return (
    <Card
      shadow="none"
      className="border-none !shadow-[inset_0_0_0_1px_#E6E8EC] m-4 transition-all duration-200 hover:!shadow-[0px_64px_64px_-48px_rgba(15,15,15,0.08),_inset_0_0_0_2px_#FCFCFD] hover:bg-[#F4F5F6] dark:!shadow-[inset_0_0_0_1px_#353945] dark:hover:!shadow-[0px_64px_64px_-48px_rgba(15, 15, 15, 0.08)] dark:hover:bg-[#23262F] p-4"
    >
      <CardBody className="desktop:flex-row desktop:justify-between desktop:items-center">
        <p className="text-lg">
          {isDisputed ? (
            <span className="disputed">
              [
              <span role="img" aria-label="Disputed">
                🚫
              </span>
              DISPUTED]
            </span>
          ) : null}
          {factObj.text}{" "}
          <Link
            href={factObj.source}
            className="text-[#777E90]"
            color="foreground"
          >
            (Source)
          </Link>
        </p>
        <div className="my-2 laptop:flex laptop:justify-end  tv:flex tv:justify-end">
          <Chip color="default" style={tagStyle} variant="flat">
            {factObj.category}
          </Chip>
        </div>
        <div className="my-2 mobile:flex laptop:flex laptop:justify-end tv:flex tv:justify-end">
          {/* <Button
                  className="mx-1"
                  style={{ fontSize: "1.05rem" }}
                  radius="full"
                  color="danger"
                  variant="bordered"
                  startContent={<span>👍</span>}
                >
                  10
                </Button>
                <Button className="mx-1"
                  style={{ fontSize: "1.05rem" }}
                  radius="full"
                  color="danger"
                  variant="bordered"
                  startContent={<span>👍</span>}
                >
                  10
                </Button> */}
          <Button
            className="mx-1 hover:text-[#83BF6E] hover:bg-[#fcfcfd] dark:hover:bg-[#141416] dark:hover:text-[#58C27D]"
            style={{ fontSize: "1.05rem" }}
            radius="full"
            color="default"
            disabled={isUpdating}
            variant="bordered"
            onClick={handleAmazing}
            endContent={
              <span
                role="img"
                aria-label="thumbs up"
                className={`${isAmazing ? "fa-bounce" : ""}`}
              >
                👍
              </span>
              // <i className={`fa-duotone z-10 text-[1.5rem] fa-thumbs-up ${isAmazing ? "fa-bounce" : ""}`} style={styleFalse}></i>
            }
          >
            <span className="text-[#23262f] dark:text-[#fcfcfd]">{factObj.votesInteresting}</span>
          </Button>
          <Button
            className="mx-1 hover:text-[#8BC5E5]  hover:bg-[#fcfcfd] dark:hover:bg-[#141416]"
            style={{ fontSize: "1.05rem" }}
            radius="full"
            color="default"
            variant="bordered"
            disabled={isUpdating}
            onClick={handleMindblowing}
            endContent={
              <span
                role="img"
                aria-label="mindblowing"
                className={`${isMindblowing ? "fa-shake" : ""}`}
              >
                🤯
              </span>
              // <i className={`fa-duotone fa-face-surprise text-[1.5rem] ${isMindblowing ? "fa-shake" : ""}`} style={stylePrimary}></i>
            }
          >
            <span className="text-[#23262f] dark:text-[#fcfcfd]">{factObj.votesMindblowing}</span>
          </Button>
          <Button
            className="mx-1 hover:text-[#ff490f] hover:bg-[#fcfcfd] dark:hover:bg-[#141416]"
            style={{ fontSize: "1.05rem" }}
            radius="full"
            color="default"
            disabled={isUpdating}
            variant="bordered"
            onClick={handleFalse}
            endContent={
              <span
                role="img"
                aria-label="flase"
                className={`${isFalse ? "fa-beat" : ""}`}
              >
                ⛔️
              </span>
              // <i className={`fa-duotone fa-octagon-xmark text-[1.5rem] ${isFalse ? "fa-beat-fade" : ""}`}></i>
            }
          >
            <span className="text-[#23262f] dark:text-[#fcfcfd]">{factObj.votesFalse}</span>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
