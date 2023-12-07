import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import "./App.css";
import { FactifyHubLogo } from "./assets/FactifyHubLogo";
import CategoryList from "./components/CategoryList/CategoryList";
import Fact from "./components/Fact/Fact";
import FactForm from "./components/FactForm/FactForm";
import Loading from "./components/Loading/Loading";
import FactList from "./components/FactList/FactList";
import supabase from "../supabase";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        const { data: facts, error } = await query
          .order("votesInteresting", {
            ascending: false
          })
          .limit(1000);

        console.log(facts);
        if (!error) setFacts(facts);
        else alert(error.message);
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]);

  return (
    <>
      <Navbar isBordered>
        <NavbarBrand>
          <FactifyHubLogo />
          <p className="font-bold text-inherit">FactifyHub</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              className="border-0 rounded-2xl bg-transparent shadow-[0_0_0_2px_#E6E8EC_inset] text-[#23262F] hover:!bg-[#23262F] hover:!shadow-[0_0_0_2px_#23262F_inset] hover:text-[#FCFCFD] dark:shadow-[0_0_0_2px_#777E90_inset] dark:text-[#FCFCFD] dark:hover:bg-[#353945] dark:hover:shadow-[0_0_0_2px_#353945_inset]"
              color="default"
              variant="ghost"
              onPress={() => setShowForm((show) => !show)}
            >
              Share a Fact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {showForm ? <FactForm setShowForm={setShowForm} /> : null}
      <main className="laptop:flex tv:flex justify-center max-w-[1024px] mx-auto">
        <CategoryList setCurrentCategory={setCurrentCategory} />
        <div className="w-10/12 mx-auto">
            {/* <FileList setFacts={setFacts} facts={facts} />

          <Loading /> */}
          {isLoading ? (
          <Loading />
        ) : (
          <FactList setFacts={setFacts} facts={facts} />
        )}
        </div>
      </main>
    </>
  );
}

export default App;
