'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Record } from './records';

interface CartItem extends Record {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Record }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const calculateTotal = (items: CartItem[]) => 
  items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

function cartReducer(state: CartState, action: CartAction): CartState {
  let items: CartItem[];
  
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.items.find(item => item.id === action.payload.id);
      items = existing
        ? state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...state.items, { ...action.payload, quantity: 1 }];
      break;
    case 'REMOVE_ITEM':
      items = state.items.filter(item => item.id !== action.payload);
      break;
    case 'UPDATE_QUANTITY':
      items = state.items.map(item => 
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      ).filter(item => item.quantity > 0);
      break;
    default:
      return state;
  }
  
  return { items, total: calculateTotal(items) };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}