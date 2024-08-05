import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);

  const addToCard = (product) => {
    setCardItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CardContext.Provider value={{ cardItems, addToCard }}>
      {children}
    </CardContext.Provider>
  );
};
CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CardContext, CardProvider };
