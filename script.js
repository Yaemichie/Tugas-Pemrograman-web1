const modeToggle = document.getElementById("modeToggle");
const mode = document.getElementById("mode");


modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    mode.style.color = "white"; // Atur warna teks menjadi putih saat mode gelap aktif
  } else {
    mode.style.color = "#333"; // Atur warna teks menjadi warna default saat mode terang aktif
  }
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// chart hehe

var ctx = document.getElementById("barChart").getContext("2d");
var barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#092635", // Warna angka pada sumbu-y
        },
      },
      x: {
        ticks: {
          color: "#092635", // Warna angka pada sumbu-x
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#092635", // Warna teks pada legenda (jika digunakan)
        },
      },
    },
  },
});

// message

function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var chatOutput = document.getElementById("chat-output");
  var messageText = messageInput.value;

  if (messageText.trim() !== "") {
    // Mengirim pesan yang diketik pengguna
    var messageElement = document.createElement("div");
    messageElement.className = "message sent"; // Ganti kelas menjadi "sent"
    messageElement.textContent = messageText;

    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;

    messageInput.value = "";

    // Simulasi pesan yang diterima setelah 1 detik
    setTimeout(function () {
      // Menghasilkan pesan acak dari array
      var random_messages = [
        "Hello",
        "Terima kasih telah mengirim pesan",
        "apa kabar",
        "hmm..",
        "semoga harimu menyenangkan",
        "ehh",
      ];
      var random_message =
        random_messages[Math.floor(Math.random() * random_messages.length)];

      // Menampilkan pesan yang diterima
      var receivedMessage = document.createElement("div");
      receivedMessage.className = "message received"; // Gunakan kelas "received"
      receivedMessage.textContent = random_message;

      chatOutput.appendChild(receivedMessage);
      chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);
  }
}
