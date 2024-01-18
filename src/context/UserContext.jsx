"use client";

import { createContext } from "react";
import { players } from '../lib/players.js'

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const user = players[0];

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
