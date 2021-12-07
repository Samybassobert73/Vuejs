<template>
  <div>
    <button @click="showForm = 'login'" class="btn-con">se connecter</button>
    <button @click="showForm = 'register'" class="btn-con">se registrer</button>
    <div>
      <Login v-if="showForm == 'login'" />
      <Register v-else-if="showForm == 'register'" />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Log/Login.vue";
import Register from "@/components/Log/Register.vue";

export default {
  name: "Connexion",
  components: {
    Login,
    Register,
  },
  data: function () {
    return {
      showForm: "login",
    };
  },
};
</script>

<style>
.btn-con{
    text-transform: uppercase;
  outline: 0;
  background-color: #328f8a;
  background-image: linear-gradient(45deg,#328f8a,#08ac4b);
  width: 10%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin: 10px 10px;
  border-radius: 15px
}
</style>
