import { useAuth0 } from "@auth0/auth0-react";
import RecentPoops from "../components/recent/RecentPoops";

export default function Home() {
  const {
    isAuthenticated,
  } = useAuth0();

  return (<>
    {!isAuthenticated && (
      <h1 className="text-6xl">
        Make peace <br />
        <span className="text-tumbleweed">with poop</span>
      </h1>
    )
    }
    {
      isAuthenticated && (
        <RecentPoops />
      )
    }
  </>
  );
}
