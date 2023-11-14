import React from 'react';

export type UserContent = {
    user: object
    setUser:(c: object) => void
  }

const userContext = React.createContext<UserContent>({user : {}, setUser: ({}) => {}});

export { userContext };