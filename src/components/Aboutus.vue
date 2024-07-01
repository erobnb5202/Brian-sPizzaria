<template>
<h1 style="color: red;font-family: Georgia, 'Times New Roman', Times, serif;">About Us</h1>
<v-container>
    <v-card>
<v-card-text style="color: black;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: larger">
 
 Welcome to Brian's Pizzeria, where passion meets flavor! Nestled in the heart of downtown, we pride ourselves on crafting mouthwatering pizzas with the freshest ingredients and a touch of Italian tradition. Whether you're craving a classic Margherita or a gourmet specialty pie, our commitment to quality and taste ensures every bite is a slice of heaven. Join us at Brian's, where every pizza is made with love and served with a smile!
</v-card-text>

</v-card>
<v-divider></v-divider>
<v-divider></v-divider>
<v-divider></v-divider>
<h3 class="text-center" style="color: red;font-family: Georgia, 'Times New Roman', Times, serif">Customer Reviews</h3>
<v-divider></v-divider>
<v-row>
<v-col cols="12" md="4">
<v-card
subtitle="-John Doe"
text="Brian's Pizzeria is my go-to spot for authentic, delicious pizza in town. The crust is perfectly crispy, toppings are generous, and the service is always friendly. I highly recommend trying their specialty pizzas—you won't be disappointed!"
title="Quality Food: "
></v-card>

<div class="text-center text-caption"></div>
</v-col>

<v-col cols="12" md="4">
<v-card>
<template v-slot:title>
   Delicious Variety:
</template>

<template v-slot:subtitle>
Conor Gallagher
</template>

<template v-slot:text>
 As a pizza enthusiast, I can confidently say that Brian's Pizzeria serves some of the best pizza I've ever tasted. The flavors are incredible, and they offer a great variety of options to suit every palate. Plus, the ambiance is cozy and inviting, making it a perfect spot for a casual dinner with friends.        </template>
</v-card>

<div class="text-center text-caption"></div>
</v-col>

<v-col cols="12" md="4">
<v-card>
<v-card-item>
 <v-card-title>Fantastic Service:</v-card-title>

 <v-card-subtitle>Big Ange</v-card-subtitle>
</v-card-item>

<v-card-text>
 I stumbled upon Mario's Pizzeria during a weekend getaway and couldn't have been happier with my find.The staff was attentive and knowledgeable about their menu. If you're in the area, do yourself a favor and stop by—you won't regret it!</v-card-text> </v-card>

<div class="text-center text-caption"></div>
</v-col>
</v-row>
</v-container>
</template>
