class ReceiptItem {

    constructor(cartItem, saved, subtotal) {
        this.cartItem = cartItem;
        this.saved = saved;
        this.subtotal = subtotal;
    }

    static buildReceiptItems(cartItems, allPromotions) {
        return cartItems.map(cartItem => {

            const promotionType = findPromotionType(cartItem.item.barcode, allPromotions);

            const {saved, subtotal} = discount(cartItem.count, cartItem.item.price, promotionType);

            return new ReceiptItem(cartItem, saved, subtotal);
        });

        function discount(count, price, promotionType) {

            let subtotal = count * price;
            let saved = 0;

            if (promotionType === 'BUY_TWO_GET_ONE_FREE') {
                saved = parseInt(count / 3) * price;
            }

            subtotal -= saved;

            return {saved, subtotal};
        }

        function findPromotionType(barcode, promotions) {

            const promotion = promotions.find(promotion => promotion.barcodes.some(b => b === barcode));

            return promotion ? promotion.type : undefined;
        }
    }
}

module.exports = ReceiptItem;