import { Button } from "@nextui-org/react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import TopDestination from "./components/TopDestination";

export default function Home() {
  return (
    <div>
      <Banner />
      <Experience />
      <TopDestination />
    </div>
  );
}
