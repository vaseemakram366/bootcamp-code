document.getElementById("submit").addEventListener("click", () => {
    const otp = document.getElementById("otp").value;

    const otpPromise = new Promise((resolve, reject) => {
        if (otp === "1234") {
            resolve("✅ OTP Verified Successfully");
        } else {
            reject("❌ Invalid OTP");
        }
    });

    otpPromise
        .then((message) => {
            document.getElementById("result").innerText = message;
            document.getElementById("result").style.color = "green";
        })
        .catch((error) => {
            document.getElementById("result").innerText = error;
            document.getElementById("result").style.color = "red";
        });
});