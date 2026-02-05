(() => {
  // ===== body =====
  document.body.style.margin = "0";
  document.body.style.background = "#1e1e1e";
  document.body.style.overflow = "hidden";

  // ===== editor =====
  const editor = document.createElement("pre");
  editor.contentEditable = "true";
  editor.spellcheck = false;

  editor.style.margin = "0";
  editor.style.padding = "16px";
  editor.style.width = "100vw";
  editor.style.height = "100vh";
  editor.style.boxSizing = "border-box";

  // ★ 元のソースコード系フォント
  editor.style.fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  editor.style.fontSize = "20px";     // ← ちゃんと変わる
  editor.style.fontWeight = "600";    // ← 太さもOK
  editor.style.lineHeight = "1.5";

  editor.style.color = "#ffffff";
  editor.style.background = "#1e1e1e";
  editor.style.whiteSpace = "pre";
  editor.style.outline = "none";
  editor.style.overflow = "auto";

  // Safari 対策（重要）
  editor.style.setProperty("font-size", "20px", "important");
  editor.style.setProperty("font-weight", "600", "important");

  editor.textContent =
`// フォントは元どおり
// size / weight も効く
`;

  editor.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
  });

  document.body.appendChild(editor);
  editor.focus();
})();
