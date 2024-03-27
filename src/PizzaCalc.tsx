import React, { createContext, useContext, useReducer } from "react";

export interface Pizza {
  id: number;
  name: string;
  toppings: string[];
  size: string;
  price: number;
}

export interface OrderState {
  pizzas: Pizza[];
}

export interface AddPizzaAction {
  type: "ADD_PIZZA";
  payload: Pizza;
}

export interface RemovePizzaAction {
  type: "REMOVE_PIZZA";
  payload: number; // pizza id
}

export type OrderActions = AddPizzaAction | RemovePizzaAction;

export const orderReducer = (state: OrderState, action: OrderActions) => {
  switch (action.type) {
    case "ADD_PIZZA":
      return { ...state, pizzas: [...state.pizzas, action.payload] };
    case "REMOVE_PIZZA":
      return {
        ...state,
        pizzas: state.pizzas.filter((pizza) => pizza.id !== action.payload),
      };
    // ... other cases
    default:
      return state;
  }
};

const OrderContext = createContext<
  { state: OrderState; dispatch: React.Dispatch<any> } | undefined
>(undefined);

export const OrderProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, { pizzas: [] });

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

const PizzaCalc = () => {
  return <div>PizzaCalc</div>;
};

export default PizzaCalc;
