<template>
    <h1 style="color: gold;">Products</h1>
    <v-card
          class="mx-auto"
          width="800"
          >
          <v-card-text class="bg-surface-light pt=4">
            <v-card-title>Cart
              {{ total }}
              <v-btn
              color="red"
              text="Checkout"
              ></v-btn>
            </v-card-title>
            <v-row>
              <v-col cols="12" md="4" v-for="product in cartItems" :key=product>
                <v-card
                      class="mx-auto my-12"
                      max-width="374"
                >
                  <v-img
                        height="250"
                        :src="product.itemImage"
                        cover
                        ></v-img>
                        <v-card-item>
                          <v-card-title>{{ product.itemName }}</v-card-title>
                        </v-card-item>
  
                        <v-card-text>
                          <div class="my-4
    text-subtitle-1">{{ product.itemPrice }}</div>
                        </v-card-text>
  
                        <v-divider class="mx-4 mb-1"></v-divider>
                        <v-card-actions>
                          <v-btn
                              color="deep-purple-lighten-2"
                              text="Remove"
                              block
                              border
                              @click="removeFromCart (product)"
                              ></v-btn>
                        </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      <div>
        <v-row>
          <v-col cols="12" md="4"  v-for="product in stockDetails" :key=product> 
  
          <v-card
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img
        height="250"
        :src="product.itemImage"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>{{ product.itemName }}</v-card-title>
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>
  
          <div class="text-grey ms-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          {{product.itemPrice}}
        </div>
  
        <div>{{product.description}}</div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>
  
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Add to Cart"
          block
          border
          @click="addToCart (product)"
        ></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
      </div>
  </template>
  <script>
  export default {
      data(){
          return{
              products:[1,2,3,4,5,6,7,8,10],
              stockDetails:[
              {
                  itemNumber: 1,
                  itemName : "Cheesy delight",
                  itemPrice : 1000,
                  description: "Our cheese pizza is a timeless classic, featuring a crispy crust topped with tangy tomato sauce and a generous layer of melted mozzarella cheese, perfectly balanced for your enjoyment.",
                  itemImage: '../images/ivan-torres-MQUqbmszGGM-unsplash.jpg'
              },
              {
                  itemNumber: 2,
                  itemName : "Pepperoni and cheese Pizza",
                  itemPrice : 1020,
                  description: "A golden crust topped with savory tomato sauce, gooey mozzarella cheese, and slices of flavorful pepperoni, creating a classic combination of indulgent flavors.",
                  itemImage: '../images/alan-hardman-SU1LFoeEUkk-unsplash.jpg'
              },
              {
                  itemNumber: 3,
                  itemName : "Vegeterian Pizza",
                  itemPrice : 1010,
                  description: "A medley of fresh vegetables atop a crispy crust, topped with melted mozzarella cheese and savory herbs.",
                  itemImage: '../images/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg'
              },
              {
                  itemNumber: 4,
                  itemName : "Hawaian Pizza",
                  itemPrice : 1050,
                  description: "Delicious Hawaian pizza topped with onions mushrooms and dhania",
                  itemImage: '../images/chad-montano-MqT0asuoIcU-unsplash.jpg'
              }
            ],
                cartItems: [],
                total: 0,
          }
      },
      methods: {
        calculateTotal (itemPrice) {
          this.total += itemPrice
        },
        addToCart (product) {
          this.cartItems.push (product)
          this.calculateTotal (product.itemPrice)
        },
        removeFromCart (product) {
                  this.cartItems.pop (product)
                  this.total -= product.itemPrice
        }
      }
  }
  </script>