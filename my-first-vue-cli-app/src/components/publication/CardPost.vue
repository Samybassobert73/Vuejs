<template>
<div class="card">
  <h4><b>John Doe</b></h4>
  <img src="../../assets/img-avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
  <span>
   <img src="../../assets/icons/heart.svg" alt="" style="width:25px">
   <img src="../../assets/icons/message1.svg" alt="" style="width:25px">
   <img src="../../assets/icons/send.svg" alt="" style="width:25px">
    
    </span>
    <p>100 likes<p>
    <h4><b>John Doe</b></h4>
    <p>[description]</p>
   
    

   
  </div>
</div>
</template>


<script>
export default {
	name: 'CardPost'
}
</script>

<style scoped lang="scss">

.card {
 
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width:400px;
  margin: 50px auto;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 5px ;

}


.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  text-align: left;
}


    

    


</style>