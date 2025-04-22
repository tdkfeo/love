const messages = [
  "You are my sunshine on a cloudy day! 🌞",
  "Every moment with you is magical! ✨",
  "I love you to the moon and back! 🌙",
  "You make my heart skip a beat! 💓",
  "Forever and always, you’re my everything! 💍",
  "With you, life feels complete! 🌸",
  "You’re the reason for my smile every day! 😊",
];

let currentMessageIndex = 0;

document.getElementById("changeTextButton").addEventListener("click", function() {
  const message = document.querySelector(".message");
  
  // Update the message based on the current index
  message.textContent = messages[currentMessageIndex];
  
  // Check if it's the last message
  if (currentMessageIndex === messages.length - 1) {
    // Trigger fireworks when the last message is shown
    fireworkDisplay();
  }

  // Increment the index and reset it to 0 if it exceeds the array length
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});

// Function to display fireworks using canvas-confetti
function fireworkDisplay() {
  const duration = 3000; // Firework duration in milliseconds
  const animationEnd = Date.now() + duration;

  const colors = ["#ff1493", "#ff6f91", "#ff69b4", "#ffe4e1", "#ffb6c1"];

  (function frame() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      particleCount: particleCount,
      startVelocity: 30,
      spread: 360,
      colors: colors,
      origin: {
        x: Math.random(),
        // Random firework height (50%-80% of the screen)
        y: Math.random() * 0.3 + 0.5,
      },
    });

    requestAnimationFrame(frame);
  })();
}