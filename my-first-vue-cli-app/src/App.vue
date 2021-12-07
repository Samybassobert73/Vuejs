<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
      <img src="./assets/icons/home.svg">
      <p>Home</p>
      </router-link> 
      <router-link to="/profil">
      <img src="./assets/icons/user.svg">
      <p>Profil</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  
}

#nav {
  padding: 30px;
  background: #fff;
  display: flex;
  justify-content: center;

  a {
    padding: 10px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none; 

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body{
  background: #f1f1f1;
  margin: 0;
}
</style>
