/* تصميم صندوق النسخ */
const style = `
    .copy-container {
        position: relative;
        background: #1e1e1e;
        color: #fff;
        border-radius: 8px;
        padding: 15px;
        font-family: 'Courier New', monospace;
        font-size: 15px;
        line-height: 1.6;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        overflow: auto;
        border: 1px solid #333;
        max-width: 600px;
        margin: 20px auto;
    }

    .copy-container button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #0073e6;
        color: white;
        border: none;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s;
    }

    .copy-container button:hover {
        background: #005bb5;
    }

    .copy-container::selection {
        background: #0073e6;
        color: white;
    }
`;

// إنشاء عنصر style لإضافة الـ CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);

// إنشاء دالة لنسخ النص
function copyText(button) {
    var text = button.previousElementSibling.innerText;

    navigator.clipboard.writeText(text).then(function() {
        button.innerText = "✔ تم النسخ";
        setTimeout(function() {
            button.innerText = "نسخ";
        }, 2000);
    }).catch(function(err) {
        console.error("حدث خطأ في النسخ:", err);
    });
}

// إضافة الصندوق إلى الـ DOM
const container = document.createElement('div');
container.classList.add('copy-container');

const pre = document.createElement('pre');
pre.id = 'copyText';
pre.textContent = "هذا هو النص الذي يمكنك نسخه بسهولة عبر الضغط على زر النسخ.";

const button = document.createElement('button');
button.textContent = 'نسخ';
button.onclick = function() { copyText(button); };

container.appendChild(pre);
container.appendChild(button);

document.body.appendChild(container);
