<template>
<div class="card">
  <img src="../assets/img-avatar2.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Jane Doe</b></h4>
    <p>Interior Designer</p>
    <button class="btn-grad">Se connecter</button>
  </div>
</div>
</template>


<script>
export default {
	name: 'Card2'
	
}
</script>


<style scoped lang="scss">
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width:300px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

button {
  
  text-transform: uppercase;
  outline: 0;
  background-color: #328f8a;
  background-image: linear-gradient(45deg,#328f8a,#08ac4b);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}


    

</style>