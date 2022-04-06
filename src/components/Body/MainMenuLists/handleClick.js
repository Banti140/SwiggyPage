function updateDishQuantityInCart(dishCopy) {
    return (currentItem) => {
        if (currentItem.id === dishCopy.id) {
            currentItem.quantity = currentItem.quantity + 1;
        }
    }
}

function findDishById(detail) {
    return (dish) => {
        return dish.id === detail.id
    }
}

export function handleClick(dish, newCart) {
    let dishCopy = {
        quantity: 0,
        id: dish.id
    };

    let foundCartItem = (newCart.find(findDishById(dish)));

    if (foundCartItem === undefined) {
        dishCopy.quantity = 1;
        newCart.push(dishCopy);
    }
    else {
        newCart.forEach(updateDishQuantityInCart(dishCopy));
    }
    return newCart;
}

