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
    case "REMOVE_FROM_BASKET":
      //find index function within state
      const index = state.basket.findIndex(
        // goes through all basket items to find the first match and return it
        (basketItem) => basketItem.id === action.id
      );
      //copy basket into temperary variable in new basket
      let newBasket = [...state.basket];
      //if index is greater or equal to 0 it found an item inside the basket
      if (index >= 0) {
        // new basket now gets cut and pasted by one so new basket.splice(index) is essentialy creating a new array with 1 less item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product(id:${action.id}) as it's not in the basket`
        );
      }
      return {
        //returns the new basket
        ...state,
        basket: newBasket,
      };
  }
};

export default reducer;
