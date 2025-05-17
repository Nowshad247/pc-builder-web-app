import { getServerSession } from "next-auth";
import HomePageheader from "../components/HomePageComponent/HomePageheader";
import LoginButton from "../components/LoginButton";
import UserInfo from "../components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import HeroSections from "../components/HomePageComponent/HeroSections";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <HomePageheader />
      <HeroSections />
      {/* <LoginButton />
      <UserInfo /> */}
    </div>
  );
}
