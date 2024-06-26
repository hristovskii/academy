import EESTEC from "./components/Eestec";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Promo from "./components/Promo";
import Sponsors from "./components/Sponsors";
import Statistics from "./components/Statistics";
import Events from "./components/Events";
import Organizators from "./components/organizators";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Organizators></Organizators>
      <KeyFeatures></KeyFeatures>
      <EESTEC></EESTEC>
      <Statistics></Statistics>
      <Events></Events>
      <Sponsors></Sponsors>
      <Promo></Promo>
    </>
  );
}