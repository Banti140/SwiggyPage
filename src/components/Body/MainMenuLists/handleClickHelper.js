const handleClickHelper = {

    updateDishQuantityInCart(detailCopy) {
        return (currentItem) => {
            if (currentItem.id === detailCopy.id) {
                currentItem.quantity = currentItem.quantity + 1;
            }
        }
    },

    findDishById(detail) {
        return (dish) => {
            return dish.id === detail.id
        }
    },

    handleClick(detail, cart) {
        let newCart = [...(cart)];
        let detailCopy = {
            quantity: 0,
            id: detail.id
        };

        let isAvaliableInCart = (newCart.find(this.findDishById(detail)));

        if (isAvaliableInCart === undefined) {
            detailCopy.quantity = 1;
            newCart.push(detailCopy);
        }
        else {
            newCart.forEach(this.updateDishQuantityInCart(detailCopy));
        }
        return newCart;
    }
}

export { handleClickHelper }
