<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="login-container">
        <div class="card">
          <div class="login-header-container">
            <p class="login-header">Nairobi</p>
            <p class="login-header">Sausages</p>
          </div>
        <form>
            <label for="fname">Enter your email address</label><br>
            <input type="text" id="email" name="email"
            class="form-control" placeholder="Enter Email address"><br>
            <label for="password">Enter your Password</label><br>
            <input type="text" id="password" name="password"
            class="form-control" placeholder="Enter password"><br><br>
            <input type="submit" value="Login" class="login-button">
        </form>
    </div>
    </div>
</template>
