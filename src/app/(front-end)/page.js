import { getServerSession } from "next-auth";
import HomePageheader from "../components/HomePageheader";
import LoginButton from "../components/LoginButton";
import UserInfo from "../components/UserInfo";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Home() {
  const session = getServerSession(authOptions);
  return (
    <div className="">
      <HomePageheader></HomePageheader>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-4">Welcome to the Home Page</h1>
        <LoginButton></LoginButton>
        <UserInfo></UserInfo>
        <p>
          form client component
          <br />
          {JSON.stringify(session)}
        </p>
      </div>
    </div>
  );
}
