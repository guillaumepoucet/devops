"use client";

import { UserContext } from "@component/context/UserContext"
import { useContext } from "react"

export function NavBar() {
  const user = useContext(UserContext)

  return (
    <div className="px-4 py-4 text-white bg-indigo-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2 text-xl font-bold">Logo</span>
          <span className="text-xl font-bold">|</span>
          <span className="ml-2 text-xl font-bold">Dashboard</span>

        </div>
        <div>
          {user.pseudo}&nbsp;
          {user.totalGames}
        </div>
      </div>
    </div>
  )
}
