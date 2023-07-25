
const loginForm = document.getElementById('loginForm');
const alertPlaceholder = document.getElementById('alertPlaceholder');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = loginForm.elements.username;
    const passwordInput = loginForm.elements.password;

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Replace these with your actual credentials
    const correctUsername = 'user123';
    const correctPassword = 'password123';

    // if (username === correctUsername && password === correctPassword) {
    // appendAlert('Login successful!', 'success');
    // // Redirect to the dashboard or authenticated page here.
    // } else {
    // appendAlert('Invalid username or password. Please try again.', 'danger');
    // }


    if (username === correctUsername && password === correctPassword) {
        alertMessage.classList.add('d-none');
        // Redirect to the dashboard or authenticated page here.
    } else {
        alertMessage.textContent = 'Invalid username or password. Please try again.';
        alertMessage.classList.remove('d-none');
        // Set a timeout to hide the alert after 5 seconds (5000 milliseconds)
        setTimeout(function() {
            alertMessage.classList.add('d-none');
        }, 1500);
    }
});

// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div');
//     wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="close" data-dismiss="alert" aria-label="Close">',
//     '       <span aria-hidden="true">&times;</span>',
//     '   </button>',
//     '</div>'
//     ].join('');

//     alertPlaceholder.appendChild(wrapper);
// };
