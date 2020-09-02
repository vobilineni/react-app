import React from 'react';

const UserContext = React.createContext('sri');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
export default UserContext;
