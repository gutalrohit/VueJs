import Home from '../components/StockTraderHome.vue'
import StocksPortfolio from '../components/StocksPortfolio.vue'
import StocksShop from '../components/StocksShop.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/stocksportfolio', component: StocksPortfolio },
  { path: '/stocksshop', component: StocksShop }
]