<template>
  <button data-bs-toggle="modal" data-bs-target="#staticSignup" class="btn btn-secondary">Sign up</button> 
  <!-- Modal -->
    <div @submit.prevent="handleSubmit" class="modal fade" id="staticSignup" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Sign up</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                    <input type="user" class="form-control" v-model="username">
                </div>
                </div>
                <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" v-model="email">
                </div>
                </div>
                <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" v-model="password">
                </div>
                </div>
                <button class="btn btn-primary btn-block">Sign up</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  
</template>

<script>
// import axios from 'axios';

export default {
  name: "SignupForm",

 data(){
  return{
    username: '',
    email: '',
    password: ''
  }
 },

methods:{
  handleSubmit(){
    
    const data = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    console.log(data)

    // axios.post('https://localhost:8080/', data)
    // .then(
    //   res => {
    //     console.log(res)
    //   }
    // ).catch(
    //   err =>{
    //     console.log(err)
    //   }
    // )

  }
}

}
</script>