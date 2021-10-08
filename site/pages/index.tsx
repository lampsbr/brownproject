import { useAuth0 } from "@auth0/auth0-react";
import RecentPoops from "../components/recent/RecentPoops";
import UserMenu from "../components/userMenu/UserMenu";

export default function Home() {
  const {
    isAuthenticated,
  } = useAuth0();
  return (
    <section className="m-0 flex flex-col w-screen justify-center bg-honeydew h-screen text-darkliver">
      <nav>
        <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
          <li>
            LOGO
          </li>
          <UserMenu />
        </ul>
      </nav>

      <div className="my-auto mx-auto md:mx-48 ">
        {!isAuthenticated && (
          <h1 className="text-6xl">
            Make peace <br />
            <span className="text-tumbleweed">with poop</span>
          </h1>
        )}
        {isAuthenticated && (
          <RecentPoops />
        )}
      </div>
      <br />
    </section>
  )
}
