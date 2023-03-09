<template>
    <button @click="test"></button>
</template>

<script>
    export default {
        name: "CartMain",
        data() {
            return {
                "customerId": 1
            }
        },
        methods: {
            test() {
                this.$store.commit('setResourceName', "carts")
                this.$store.commit('setVersion', "v1.0.0")
                this.$api.cart.getCart(this.customerId).then(
                    (res) => {
                        console.log(res.data)
                        alert(res.data)
                    }
                ).catch((error) => {
                    Promise.reject(error)
                })
            }
        }
    }
</script>