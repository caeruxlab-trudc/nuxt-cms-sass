<template>
  <main class="main">
    <section class="section">
      <div class="inner">
        <div class="lst-container">
          <div class="loading" v-if="status === 'pending'">loading....</div>
          <ul v-else class="lst-container-products">
            <li class="lst-container-products-item" v-for="product in products" :key="product.id">
              <NuxtLink :to="`/product/${product.product_code.toLowerCase()}`" class="lst-container-products-item-link">
                <div class="lst-container-products-item-link-image">
                  <NuxtImg :src="product.product_image.url" :alt="product.product_name" class="picture" />
                </div>
                <div class="lst-container-products-item-link-content">
                  <h2>{{ product.product_name }}</h2>
                  <p>{{ product.product_description }}</p>
                  <span>{{ product.product_price }}</span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="container-layout">
          <h1>Summer</h1>
          <span class="sub">Outfit Inspiration</span>
          <p class="txt_desp">New season, new wardrobe. As the temperatures continue to rise, have your style follow suit and revamp your racks with fresh, elevated summer looks.</p>
          <NuxtLink to="/products" class="btn">read more</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const response = await useFetchProducts();
const products = response?.products;
const status = response?.status;
</script>

<style lang="sass" scoped>
@import "./index"
</style>