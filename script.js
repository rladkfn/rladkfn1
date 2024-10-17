const boardElement = document.getElementById("board");

// 9x9 스도쿠 보드의 초기값 설정
const initialValues = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// 스도쿠 보드 설정
function setupBoard() {
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            if (initialValues[i][j] !== 0) {
                cell.textContent = initialValues[i][j];
                cell.classList.add("fixed");
            } else {
                const input = document.createElement("input");
                input.type = "number";
                input.min = 1;
                input.max = 9;
                input.placeholder = ''; // 빈 자리 표시
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        boardElement.appendChild(row);
    }
}

// 스도쿠 풀이 확인
function checkSolution() {
    const userSolution = Array.from({ length: 9 }, () => Array(9).fill(0));
    const inputs = document.querySelectorAll("input");
    let isCorrect = true;

    inputs.forEach((input, index) => {
        const value = parseInt(input.value);
        if (!isNaN(value) && value >= 1 && value <= 9) {
            const row = Math.floor(index / 9);
            const col = index % 9;
            userSolution[row][col] = value;
        }
    });

    // 초기값과 사용자 입력값 비교
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (userSolution[i][j] !== initialValues[i][j] && initialValues[i][j] === 0) {
                isCorrect = false;
                break;
            }
        }
    }

    alert(isCorrect ? "정답입니다!" : "오답입니다!");
}

// 게임 시작
setupBoard();
