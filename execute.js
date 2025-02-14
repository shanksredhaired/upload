fetch("https://rcontracts.ril.com/pnc/security/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "email=testingonly4136@gmail.com&password=Shanks@4136"
}).then(response => response.text()).then(data => console.log(data));
