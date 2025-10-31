// Simple simulated login: saves an entry into sessionStorage and redirects to form.html
document.getElementById('loginForm').addEventListener('submit', function(e){
e.preventDefault();
const email = document.getElementById('email').value.trim();
const pwd = document.getElementById('password').value;
if(!email || !pwd){ alert('Please fill email and password'); return; }
// Save demo profile data container
sessionStorage.setItem('loggedInEmail', email);
// initialize empty resume data if not exists
if(!sessionStorage.getItem('resumeData')){
sessionStorage.setItem('resumeData', JSON.stringify({}));
}
window.location.href = 'form.html';
});
