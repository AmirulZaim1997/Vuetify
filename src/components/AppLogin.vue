<template>
  <v-container>
      <v-alert type="warning" :value="alert">
      Please Fill Email and Password
    </v-alert>
    <v-form v-model="valid" @submit.prevent="submit">
     
      <v-text-field
        label="Email"
        v-model="email"
       
        required
      ></v-text-field>
       <v-text-field
        label="Password"
        v-model="password"
        type="password"
        
        
        required
      ></v-text-field>
      <v-btn rounded color="primary" dark type="submit" class="indigo"> Submit </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
    data(){
        return{
            email:null,
            password:null,
            alert:false
            

        };
    },
    methods:{
        submit(){
            if(!this.email && !this.password){
                this.alert=true
            }
            console.log(`Email is ${this.email} Password is ${this.password}`);

        }
    }
}
</script>