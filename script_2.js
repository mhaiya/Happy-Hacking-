const validateName = () => {
  const name = document.getElementById("nameInput").value;
  const message = document.getElementById("message");

  if (name.length <= 2) {
    message.textContent = "名前は3文字以上で入力してください";
  } else if (name.length <= 5) {
    message.textContent = "送信されました";
  } else {
    message.textContent = "名前は5文字以下で入力してください";
  }
};