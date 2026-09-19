
const UPI_ID = "aulatc@ybl";

const TELEGRAM_LINK = "https://t.me/tournament_withdraw";

// DEPOSIT
function openUPI() {
  const upiURL =
    "upi://pay" +
    "?pa=" + encodeURIComponent(UPI_ID) +
    "&pn=" + encodeURIComponent("DKS Free Fire Tournament") +
    "&am=30" +
    "&cu=INR";

  window.top.location.href = upiURL;
}

// TELEGRAM
function openTelegram() {
  window.top.location.href = TELEGRAM_LINK;
}

// REGISTER
function registerDemo() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("auth-msg");

  if (!/^\d{10}$/.test(mobile)) {
    msg.innerText = "❌ सही 10 अंकों का मोबाइल नंबर डालो";
    return;
  }

  if (password.length < 6) {
    msg.innerText = "❌ पासवर्ड कम से कम 6 अक्षर का हो";
    return;
  }

  localStorage.setItem("demoMobile", mobile);
  localStorage.setItem("demoPassword", password);

  msg.innerText = "✅ Register सफल हुआ! अब Login करो";
}

// LOGIN
function loginDemo() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("auth-msg");

  const savedMobile = localStorage.getItem("demoMobile");
  const savedPassword = localStorage.getItem("demoPassword");

  if (mobile === savedMobile && password === savedPassword) {

    // LOGIN SUCCESS
    document.body.classList.add("logged-in");

    // LOGIN BOX HIDE
    document.getElementById("login").style.display = "none";

    msg.innerText = "✅ Login सफल हुआ!";

    alert("🎉 Welcome to DKS Tournament!");

  } else {
    msg.innerText = "❌ मोबाइल नंबर या पासवर्ड गलत";
  }
}

