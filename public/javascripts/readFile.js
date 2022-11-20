window.addEventListener("DOMContentLoaded", async () => {
  let url = document.referrer ? document.referrer : "직접입력";

  const ip = await fetch("https://api.ipify.org?format=json", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.ip);

  const connectEvent = {
    name: "connect",
    data: {
      url: url,
      lastIp: ip,
    },
  };

  fetch(
    `http://localhost:8080/tests/${key}/basic?event=${JSON.stringify(
      connectEvent,
    )}`,
    {
      method: "POST",
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }

      return console.log(response);
    })
    .catch((error) => {
      throw new Error(error);
    });
});

window.onunload = () => {
  const disconnectEvent = {
    name: "disconnect",
  };

  fetch(
    `http://localhost:8080/tests/${key}/basic?event=${JSON.stringify(
      disconnectEvent,
    )}`,
    {
      method: "POST",
    },
  );
};
