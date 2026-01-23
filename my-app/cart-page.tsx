"use client";

import { useCart } from "./cart-context";

const CartItem = ({
  item,
  updateQuantity,
  removeItem,
}: {
  item: any;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}) => (
  <div className="flex items-center py-4 border-b border-stone-200 last:border-b-0">
    <div className="w-16 h-16 bg-stone-100 rounded-lg flex items-center justify-center mr-4">
      <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-stone-100 rounded-full"></div>
      </div>
    </div>

    <div className="flex-1">
      <h3 className="font-semibold text-stone-900">{item.title}</h3>
      <p className="text-stone-600 text-sm">{item.artist}</p>
      <p className="text-stone-500 text-xs">{item.genre}</p>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold text-stone-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <p className="text-stone-500 text-sm">${item.price} each</p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="text-red-600 hover:text-red-800 transition-colors p-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
);

const EmptyCart = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-stone-900 mb-4">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-12">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-stone-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
            />
          </svg>
          <h2 className="text-xl font-semibold text-stone-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-stone-600 mb-6">
            Add some records to get started!
          </p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            Browse Records
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

  const removeItem = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  if (state.items.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-stone-900 mb-8">Your Cart</h1>

      <div className="bg-white rounded-lg shadow-sm border border-stone-200">
        <div className="p-6">
          {state.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>

        <div className="border-t border-stone-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-stone-900">Total:</span>
            <span className="text-2xl font-bold text-stone-900">
              ${state.total.toFixed(2)}
            </span>
          </div>

          <a
            href="/how-to-order"
            className="w-full bg-stone-900 text-white py-3 px-4 rounded-lg hover:bg-stone-800 transition-colors text-center block"
          >
            How to Order
          </a>
        </div>
      </div>
    </div>
  );
}
