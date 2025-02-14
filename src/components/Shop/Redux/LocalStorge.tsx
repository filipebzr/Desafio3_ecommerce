import type { RootState } from "./Store"

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch {
      return undefined;
    }
  };
  
  export const saveState = (state: RootState['cart']) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch {
      // Ignore errors sem capturar o parâmetro
    }
  };