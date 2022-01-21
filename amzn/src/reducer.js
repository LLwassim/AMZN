export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //whatever the state was
        ...state,
        //plus whatever is in the basket, now adds an item to the basket with action.item
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
