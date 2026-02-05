(() => {
  // ===== body 初期化 =====
  document.body.style.margin = "0";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.background = "#1e1e1e";
  document.body.style.overflow = "hidden";
  document.body.style.fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  // ===== エディタ (divに変更) =====
  const editor = document.createElement("div");
  editor.contentEditable = "true";
  editor.spellcheck = false;

  editor.style.margin = "0";
  editor.style.padding = "16px";
  editor.style.width = "100%";
  editor.style.minHeight = "100%";
  editor.style.color = "#ffffff";
  editor.style.outline = "none";
  editor.style.whiteSpace = "pre-wrap"; // 横折り返し
  editor.style.wordBreak = "break-word";
  editor.style.lineHeight = "1.5";
  editor.style.boxSizing = "border-box";
  editor.style.fontSize = "20px";      // ← ここで文字サイズを自由に変えられる
  editor.style.overflowY = "auto";     // 縦スクロール

  // 初期テキスト
  editor.textContent =
`// 自由に文字を書ける
// これは JS だけで動くエディタ
// 保存もUIもなし、打つだけ
`;

  // Tabキー対応
  editor.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
  });

  document.body.appendChild(editor);
  editor.focus();
})();
