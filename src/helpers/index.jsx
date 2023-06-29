export const saveCartInSessionStorage = (key, item) => {
    sessionStorage.setItem(key, JSON.stringify(item));
}

export const getCartFromSessionStorage = (key) => {
    const storedItem = sessionStorage.getItem(key);
    if (storedItem) {
        try {
            const parsedCart = JSON.parse(storedItem);
            if (Array.isArray(parsedCart)) {
                return parsedCart;
            } else {
                console.log('Invalid cart data sessionStorage.');
            }
        } catch (error) {
            console.log('Error parsing cart data from sessionStorage:', error);
        }
    }
}