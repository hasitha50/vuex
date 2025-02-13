import { createStore } from 'vuex';

export const store = createStore({
    state: {
        products: [
            { name: 'banana Skin', price: 20 },
            { name: 'shiny Star', price: 40 },
            { name: 'green Skin', price: 60 }
        ]
    },
    mutations: {
        reducePrice: (state,payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice:(context,payload)=>{
            setTimeout(function(){
                context.commit('reducePrice',payload);
            },2000);
        }
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    }
});
