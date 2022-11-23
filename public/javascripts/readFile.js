window.addEventListener("DOMContentLoaded", async () => {
  let url = document.referrer ? document.referrer : "직접입력";

  const ip = await fetch("https://api.ipify.org?format=json", {
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Request-Private-Network": true,
    },
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
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Request-Private-Network": true,
      },
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }

      console.log(response);
    })
    .catch((error) => {
      throw new Error(error);
    });

  const videoEvent = {
    name: "video",
    data: ip,
  };

  fetch(
    `http://localhost:8080/tests/${key}/video?event=${JSON.stringify(
      videoEvent,
    )}`,
    {
      method: "POST",
      header: {
        Accept: "multipart/form-data",
        "content-type": "multipart/form-data",
        "Access-Control-Request-Private-Network": true,
      },
    },
  )
    .then((res) => res.blob())
    .then((res) => console.log(URL.createObjectURL(res)));

  document.body.addEventListener("click", (event) => {
    const clickEvent = {
      name: "click",
      data: {
        tag: JSON.stringify(event.target.tagName.toString()),
        context: JSON.stringify(event.target.textContent.toString()),
      },
    };

    fetch(
      `http://localhost:8080/tests/${key}/mouse?event=${JSON.stringify(
        clickEvent,
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
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Request-Private-Network": true,
      },
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
};
