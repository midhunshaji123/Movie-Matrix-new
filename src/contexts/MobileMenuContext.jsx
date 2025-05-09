import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext();

export const useMobileMenu = () => useContext(MobileMenuContext);

export const MobileMenuProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
