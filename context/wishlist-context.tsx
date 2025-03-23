import { createContext, useContext, useEffect, useState } from "react";

type WishlistItem = {
  bookId: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  addItem: (bookId: string) => void;
  removeItem: (bookId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (bookId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  // Load wishlist from local storage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("bookHavenWishlist");
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Error parsing wishlist from local storage: ", error);
        setItems([]);
      }
    }
  }, []);

  // Save wishlist to local storage on change
  useEffect(() => {
    localStorage.setItem("bookHavenWishlist", JSON.stringify(items));
  }, [items]);

  const addItem = (bookId: string) => {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.bookId === bookId)) {
        return prevItems;
      } else {
        return [...prevItems, { bookId }];
      }
    });
  };

  const removeItem = (bookId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.bookId !== bookId));
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const isInWishlist = (bookId: string) =>
    items.some((item) => item.bookId === bookId);

  const value = {
    items,
    addItem,
    removeItem,
    clearWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
