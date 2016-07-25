class ReceiptItem {

    constructor(cartItem, saved, subTotal) {
        this.cartItem = cartItem;
        this.saved = saved;
        this.subTotal = subTotal;
    }
}

module.exports = ReceiptItem;