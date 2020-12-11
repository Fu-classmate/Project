export default {
  //商品总数量
  totalCount(state) {
    return state.shopCart.reduce((pre, currentFood) => {
      return pre + currentFood.count
    }, 0)
  },
  //商品总价
  totalPrice(state) {
    return state.shopCart.reduce((pre, currentFood) => {
      return pre + currentFood.count * currentFood.price
    }, 0)
  }
}
