let currentIndex = 0;



function changeMessage() {
  const messages = [
    "I hope u dont eat the kitkat before opening the link",
    "I just wanna say ki, just bcs i couldnt do much",
    "Doesnt mean i wont try :,) no matter how cringe it is",
    "You are a strong, brave, inspirational woman",
    "I wish I could see how the cringe is affecting ur face rn XD",
    "I just hope to cringe u every single birthday like I do always",
    "Neha take care of her as well as of yourself, cheers",
    "Fingers are giving up, so a very happy birthday to u barnita, win the world"
  ];

  const birthdayMessage = document.getElementById("birthdayMessage");

  // Display the message in order
  birthdayMessage.textContent = messages[currentIndex];

  // Increment the index for the next message
  currentIndex = (currentIndex + 1) % messages.length;
}