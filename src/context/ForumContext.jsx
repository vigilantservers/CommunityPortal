import { createContext } from 'react';

const ForumContext = createContext({
  authenticated: false,
  user: {},
  setAuthenticated: () => {},
  setUser: () => {},
});

export default ForumContext;
