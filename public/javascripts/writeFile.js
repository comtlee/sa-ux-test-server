window.addEventListener("DOMContentLoaded", async () => {
  let url = document.referrer ? document.referrer : "직접입력";

  const ip = await fetch("https://api.ipify.org?format=json", {
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
    `https://api.sa-ux-test.site/tests/${key}/basic?event=${JSON.stringify(
      connectEvent,
    )}`,
    {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      console.log("이용자 접속");
    })
    .catch((error) => {
      throw new Error(error);
    });

  const videoEvent = {
    name: "video",
    data: ip,
  };

  fetch(
    `https://api.sa-ux-test.site/tests/${key}/video?event=${JSON.stringify(
      videoEvent,
    )}`,
    {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      console.log("비디오 녹화완료");
    })
    .catch((error) => {
      throw new Error(error);
    });

  document.body.addEventListener("click", (event) => {
    const clickEvent = {
      name: "click",
      data: {
        tag: JSON.stringify(event.target.tagName.toString()),
        context: JSON.stringify(event.target.textContent.toString()),
      },
    };

    fetch(
      `https://api.sa-ux-test.site/tests/${key}/mouse?event=${JSON.stringify(
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

        console.log("클릭이벤트 발생");
      })
      .catch((error) => {
        throw new Error(error);
      });
  });
});

window.onbeforeunload = () => {
  const unloadEvent = {
    name: "unload",
  };

  fetch(
    `https://api.sa-ux-test.site/tests/${key}/unload?event=${JSON.stringify(
      unloadEvent,
    )}`,
    {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );
  console.log("이용자 접속 종료");
};
const key = "988b83bc-d69b-446e-8831-20afb4fca82b";
