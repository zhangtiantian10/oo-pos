class ReceiptItem {

    constructor(cartItem, saved, subtotal) {
        this.cartItem = cartItem;
        this.saved = saved;
        this.subtotal = subtotal;
    }
}

module.exports = ReceiptItem;