import HomePageheader from "../components/HomePageheader";

export default function Home() {
  return (
    <div className="">
      <HomePageheader></HomePageheader>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-4">Welcome to the Home Page</h1>
      </div>
    </div>
  );
}
