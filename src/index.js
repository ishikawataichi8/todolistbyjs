import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する
const createImcompleteList = (inputText) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button完了タグ
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親要素(div)を移動
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //todo内容を取得
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    //divの子要素を削除
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻るボタン生成
    const backButton = document.createElement("button");
    backButton.addEventListener("click", () => {
      //戻すボタンの親要素(div)を削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = deleteTarget.firstChild.innerText;
      createImcompleteList(text);
    });
    backButton.innerText = "戻す";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button削除タグ
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素(div)を削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
