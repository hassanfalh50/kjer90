// تحديد جميع العناصر التي تحتوي على الرابط
var linkElements = document.getElementsByClassName("link");

// حلقة تكرارية لتحديث جميع الروابط
for (var i = 0; i < linkElements.length; i++) {
  linkElements[i].href = "https://results.sotor.app/download/" + linkElements[i].href.split("/download/")[1];
}
