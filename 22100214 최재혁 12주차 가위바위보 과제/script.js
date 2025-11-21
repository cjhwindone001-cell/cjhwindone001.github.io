function getComputerChoice() {
  const choices = ['가위', '바위', '보'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) {
    return '비겼습니다!';
  }
  if (
    (user === '가위' && computer === '보') ||
    (user === '바위' && computer === '가위') ||
    (user === '보' && computer === '바위')
    ) {
    return '이겼습니다!';
    }
    return '졌습니다!';
}

function play(userChoice) {
  const computerChoice = getComputerChoice();
  const resultText = getResult(userChoice, computerChoice);

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    당신의 선택: <b>${userChoice}</b><br>
    컴퓨터의 선택: <b>${computerChoice}</b><br>
    결과: <b>${resultText}</b>
  `;
}