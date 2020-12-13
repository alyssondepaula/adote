import React, {createContext, useState, useEffect, useContext} from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

  const [signed, setSigned] = useState<boolean>(false);

  async function signIn() {
    setSigned(true)
  }

  async function signOut() {
    setSigned(false)
  }

  return (
    <AuthContext.Provider
      value={{signed: signed, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};
