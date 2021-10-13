
import Image from 'next/image';
import Link from 'next/link';
import UserMenu from "../components/userMenu/UserMenu";
import { useAuth0 } from "@auth0/auth0-react";

import logo from '../public/brownie.png';

export default function MainLayout({ children }) {
  const {
    isAuthenticated,
  } = useAuth0();

  return (
    <section className="m-0 flex flex-col w-screen justify-center bg-honeydew h-screen text-darkliver">
      <nav>
        <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
          <li>
            <Link href="/">
              <div>
                <Image src={logo} width="50" height="65" className="cursor-pointer" />
              </div>
            </Link>
          </li>
          <UserMenu />
        </ul>
      </nav>

      <div className="my-auto mx-auto sm:mx-12 md:mx-24 lg:mx-48 xl:mx-64 ">
        {children}
      </div>

      {isAuthenticated &&
        <div className="bg-tumbleweed h-20 w-screen text-center">
          <Link href="/addPoop">
            <button className="rounded-full mt-2 h-16 px-3 bg-darkliver text-honeydew shadow-lg">+ add poop</button>
          </Link>
        </div>
      }
    </section>
  )
}