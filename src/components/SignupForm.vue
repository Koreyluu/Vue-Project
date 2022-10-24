<template>
  <button data-bs-toggle="modal" data-bs-target="#staticSignup" class="btn btn-secondary">Sign up</button> 
  <!-- Modal -->
  <div class="modal fade" id="staticSignup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticSignupLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticSignupLabel">Sign up</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Username</label>
              <div class="col-sm-10">
                  <input type="user" class="form-control" id="inputUser">
              </div>
              </div>
              <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail">
              </div>
              </div>
              <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword">
              </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign up</button>
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

export default {
  name: "SignupForm",

}
</script>