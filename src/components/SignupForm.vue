<template>
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
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3">
              </div>
              </div>
              <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3">
              </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign up</button>
          </form>
        </div>
        <div class="modal-footer">
          <!-- <router-link style="text-decoration: none;" to="/login">Login Instead!</router-link> -->
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