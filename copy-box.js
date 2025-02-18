<script>
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
</script>
