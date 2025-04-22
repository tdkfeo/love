const messages = [
  "Đầu tiên, anh muốn gửi lời xin lỗi chân thành nhất đến em, vì đã hoàn thành dự án này trễ hơn dự kiến.<br>Nhưng anh hy vọng rằng, món quà này vẫn sẽ khiến em cảm thấy vui vẻ và hạnh phúc hơn.<br>Và anh hôm nay sẽ chia sẻ bằng 1 chút tiếng Anh nhé=))))",
  "  ",
  "Being with you, every moment feels like heaven.<br>That is a fact for sure, no cap!<br> You are always in my heart!",
  "You make my heart skip a beat!<br>Whenever we are together, I feel like I am the happiest person in the world!",
  "That is why I love you more than words can say — to the moon and back, and even beyond.<br>",
  "You are always so kind and sweet to me!<br>Even when I make silly mistakes, you always forgive me.That shows how much you love me<br>and I am very thankful for your kindness",
  "I can't imagine my life without you!<br>Gues that is because you are a very special, important person in my life.",
  "With you, life feels complete! You are the missing piece of my puzzle.<br>Without you, I would be so lost and incomplete.",
  "With the time we have spent together, I have received so much love and learned so much things from you<br>And I am so grateful for everything!",
  "Thank you for being a part of my life and my love!",
];

let currentMessageIndex = 0;

document.getElementById("changeTextButton").addEventListener("click", function () {
  const message = document.querySelector(".message");
  const button = document.getElementById("changeTextButton");

  // Update the message based on the current index
  message.innerHTML = messages[currentMessageIndex]; // Use innerHTML for line breaks

  // Update the button text based on the current message index
  if (currentMessageIndex === 0) {
    button.textContent = "Keep going";
  } else if (currentMessageIndex > 2 && currentMessageIndex < 6) {
    button.textContent = "Almost there";
  } else if (currentMessageIndex === messages.length - 2) {
    button.textContent = "One more...";
  } else if (currentMessageIndex === messages.length - 1) {
    // Remove the title element
    const titleElement = document.querySelector("h1"); // Adjust selector based on your title element
    if (titleElement) {
      titleElement.remove();
    }

    // Remove the message and button
    message.remove();
    button.remove();

    // Trigger fireworks and anniversary message
    fireworkDisplay();
  }

  // Increment the index and reset it to 0 if it exceeds the array length
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});

// Music Player Logic
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

// Automatically play music when the page loads
window.addEventListener("load", () => {
  backgroundMusic.play().catch((error) => {
    console.error("Autoplay failed:", error);
    // Show a message if autoplay fails due to browser restrictions
    musicButton.textContent = "🎵 Click to Play Music";
  });
});

// Toggle music play/pause
musicButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = "🎵 Pause Music";
  } else {
    backgroundMusic.pause();
    musicButton.textContent = "🎵 Play Music";
  }
});

// Fireworks Display
function fireworkDisplay() {
  // Display the anniversary message
  const container = document.querySelector(".container");
  const anniversaryMessage = document.createElement("h2");
  anniversaryMessage.textContent = "Happy 3rd month anniversary!!! 🎉🎆";
  anniversaryMessage.className = "anniversary-message";
  container.appendChild(anniversaryMessage);

  // Trigger fireworks using canvas-confetti
  const duration = 2000; // Firework duration in milliseconds
  const end = Date.now() + duration;

  const fireworkColors = ["#ff1493", "#ff6f91", "#ff69b4"];

  (function frame() {
    if (Date.now() > end) {
      return;
    }

    confetti({
      particleCount: 20, // Reduced number of fireworks
      startVelocity: 40,
      spread: 60,
      colors: fireworkColors,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5, // Fireworks at the top half of the screen
      },
    });

    requestAnimationFrame(frame);
  })();
}
