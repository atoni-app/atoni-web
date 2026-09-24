import { LandingPage } from "@/app/components/LandingPage";
import { siteCopy } from "@/app/content/site-copy";

export default function Home() {
  return <LandingPage copy={siteCopy.pl} />;
}
