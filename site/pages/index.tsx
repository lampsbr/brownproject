import UserMenu from "../components/userMenu/UserMenu";

export default function Home() {
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

      <h1 className="text-6xl  my-auto mx-auto  md:mx-48 ">
        Make peace <br />
        <span className="text-tumbleweed">with poop</span>
      </h1>
    </section>
  )
}
