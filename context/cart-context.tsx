import { books } from "@/lib/db";
import { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  bookId: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (bookId: string, quantity?: number) => void;
  removeItem: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  isInCart: (bookId: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("bookHavenCart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart from local storage: ", error);
        setItems([]);
      }
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem("bookHavenCart", JSON.stringify(items));
  }, [items]);

  const addItem = (bookId: string, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.bookId === bookId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.bookId === bookId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { bookId, quantity }];
      }
    });
  };

  const removeItem = (bookId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.bookId !== bookId));
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(bookId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.bookId === bookId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const book = books.find((book) => book.id === item.bookId);
      return total + (book ? book.price * item.quantity : 0);
    }, 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (bookId: string) => {
    return items.some((item) => item.bookId === bookId);
  };

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
