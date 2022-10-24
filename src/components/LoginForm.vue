<template>
<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-outline-light" >Log in</button> 
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <form>
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="loginEmail">
            </div>
            </div>
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="loginPassword">
            </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
      <div class="modal-footer">
        <!-- <SignupForm/> -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
// import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'LoginForm',

  // components:{
  //   SignupForm,
  // }

}
</script>
