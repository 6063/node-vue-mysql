<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      axios({
        method:"POST",
        url:"/api/user/addUser",
        data:{
            username: name,
            age: age
        }
      }).then((response) =>{
        console.log(response);
      });
      /*this.$http.post('/api/user/addUser', {username: name,age: age},{}).then((response) => {
        console.log(response);
      })*/
    }
  }
}
</script>