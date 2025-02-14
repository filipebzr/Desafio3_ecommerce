import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage por padrão
import cartReducer from '../Redux/CartSlice';
// import { loadState, saveState } from './LocalStorge';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // Apenas persista o estado do carrinho
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desativa verificação para redux-persist
    }),
  });
  // store.subscribe(() => {
  //   saveState(store.getState().cart);
  // });
  // preloadedState: {
  //   cart: loadState(),
  // },

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);

