const btnGetUser = document.getElementById('btn-get-user');
const userInfo = document.getElementById('user-info');
const userPicture = document.getElementById('user-picture');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userLocation = document.getElementById('user-location');

function fetchRandomUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      userPicture.src = user.picture.large;
      userName.textContent = `${user.name.first} ${user.name.last}`;
      userEmail.textContent = user.email;
      userLocation.textContent = `${user.location.city}, ${user.location.country}`;
      userInfo.style.display = 'block';
    })
    .catch(error => console.error(error));
}

btnGetUser.addEventListener('click', fetchRandomUser);