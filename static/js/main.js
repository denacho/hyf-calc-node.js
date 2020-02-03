async function _calculate(op) {
  const number1 = document.querySelector("#number1").value;
  const number2 = document.querySelector("#number2").value;
  document.querySelector("#result").textContent = "";
  document.querySelector("#error").textContent = "";
  const url = `/api/${op}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ number1, number2 })
  });
  let json;
  try {
    json = await res.json();
  } catch {
    document.querySelector("#error").textContent =
      "Server returned a bad response. Try again later.";
  }
  if (json.status && json.status === "ok") {
    document.querySelector("#result").textContent = json.result;
  } else {
    document.querySelector("#error").textContent = json.message;
  }
  console.log(json);
}

document.querySelector("#button-add").addEventListener("click", () => {
  _calculate("add");
});

document.querySelector("#button-subtract").addEventListener("click", () => {
  _calculate("subtract");
});

document.querySelector("#button-multiply").addEventListener("click", () => {
  _calculate("multiply");
});

document.querySelector("#button-divide").addEventListener("click", () => {
  _calculate("divide");
});
