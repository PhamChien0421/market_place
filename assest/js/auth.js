let isLogin = true;

function setForm() {
  isLogin = !isLogin;
  updateForm();
}

function updateForm() {
  const title = document.querySelector(".title");
  const form = document.querySelector("form");

  document.title = `${isLogin ? "Log In" : "Sign Up"}`;
  title.innerHTML = "";
  title.innerHTML = `${isLogin ? "Log In" : "Sign Up"}`;
  form.innerHTML = "";
  form.innerHTML = `
  <div class="inputbox">
    <input type="email" placeholder="Enter email" id="email" />
    <i class="fas fa-envelope" style="color: white"></i>
    <p class="error" id="emailError"></p>
  </div>
  <div class="inputbox">
    <input type="password" placeholder="Password" id="password" />
    <i class="fas fa-key" style="color: white"></i>
    <p class="error" id="passError"></p>
  </div>
  ${
    isLogin
      ? ""
      : `
        <div class="inputbox">
          <input type="password" placeholder="Confirm Password" id="confirmPassword" />
          <i class="fas fa-key" style="color: white"></i>
          <p class="error" id="confirmPassError"></p>
        </div>
      `
  }
  <button type="submit" class="btnSubmit">
    ${isLogin ? "Log In" : "Sign Up"}
  </button>
  <div id="more">
    <span>${isLogin ? "Don't have an account?" : "Have an account?"}</span>
    <button onclick="setForm()">${isLogin ? "Sign Up" : "Log In"}</button>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  updateForm();
});

function submitForm(event) {
  event.preventDefault();
  let userList = JSON.parse(localStorage.getItem("user")) || [];
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  console.log(email);
  console.log(password);
  console.log(userList);

  if (isLogin) {
    if (email !== "" && password !== "") {
      let success = false;
      for (let value of userList) {
        if (email === value.email && password === value.password) {
          success = true;
          break;
        }
      }
      if (success) {
        alert("Dang nhap thanh cong");
        window.location.href = "index.html";
      } else {
        alert("Sai thong tin dang nhap");
      }
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  } else {
    let confirmPassword = document.querySelector("#confirmPassword").value;
    if (email !== "" && password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        for (let value of userList) {
          if (email === value) {
            alert("Email da ton tai");
            break;
          }
        }
        alert("Tao tai khoan thanh cong");
        let newUser = {
          email: email,
          password: password,
        };
        userList.push(newUser);
        localStorage.setItem("user", JSON.stringify(userList));
        isLogin = true;
        updateForm();
      } else {
        alert("Mat khau xac nhan khong khop");
      }
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  }
}
