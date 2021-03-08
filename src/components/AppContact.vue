<template>
  <v-layout mt-15>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="mx-auto elevation-20" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
          <v-avatar color="indigo" size="30">
            <span class="white--text headline">CJ</span>
          </v-avatar>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

