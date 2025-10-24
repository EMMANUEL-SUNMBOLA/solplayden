const copyButton = document.querySelector(".copycat");
const contractAddress = document.querySelector(".contract");
const content = contractAddress.innerText;

const copycat = () => {
  if (navigator.clipboard && window.isSecureContext) {
    // ✅ Modern browsers (works on HTTPS + mobile)
    navigator.clipboard.writeText(content)
  } else {
    // ⚙️ Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = content;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setTimeout(() => copyButton.innerText = "Copy", 1500);
    } catch (err) {
      console.error("Fallback copy failed:", err);
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

// 👇 Attach event listener
copyButton.addEventListener("click", copycat);
