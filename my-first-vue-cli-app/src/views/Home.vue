<template>
  <div class="home">
    <section class="connexion">
    <h2>Sign in / Sign up</h2>
      <Connexion/>
     
    </section>
    
    <section class="sect-relation">
    <h2>Suggested profiles</h2>
      <div class="relation"> 
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>

    <section class="post">
        <CardPost/>
        <CardPost/>
        <CardPost/>
    </section>
    

  </div>
</template>

<script>
// @ is an alias to /src


//import Login from '@/components/Log/Login.vue'
//import Register from '@/components/Log/Register.vue'

import Card from '@/components/Card.vue'

import CardPost from '@/components/publication/CardPost.vue'
import Connexion from '@/components/Log/Connexion.vue'

export default {
  name: 'Home',
  components: {
   Card,CardPost,Connexion
  }

}
</script>

<style>
.relation{
  display: flex;
  justify-content: space-around;
  width:80%;
  margin: auto;
  background-color:#fff;
}
.sect-relation{
  background-color:#fff;
width:100%;
padding: 50px 0px;
}
.post{
  display: flex;
  justify-content: space-around;
  Flex-direction: column;
  
}
</style>
