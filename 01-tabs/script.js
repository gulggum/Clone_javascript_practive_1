const tabLine = document.querySelector(".tab_line");
const tabBtns = document.querySelectorAll(".tab_btn");
const desBox = document.querySelectorAll(".describe");

function tabHandler(e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    //1. 우선 탭버튼들의 active를 제거해준다(초기화?)
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });
    //2. 클릭한 탭에만 active를 추가해준다
    e.target.classList.add("active");
    //3. 설명박스들도 active를 제거해주기
    desBox.forEach((des) => {
      des.classList.remove("active");
    });
    //4. 클릭된 탭과 즉 id와 일치하는 설명박스를 불러와 그 요소에 active를 추가함으로써 웹상에 보여준다!
    const clickEL = document.getElementById(id);
    clickEL.classList.add("active");
  }
}

tabLine.addEventListener("click", tabHandler);
