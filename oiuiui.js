var LoadingImage = '<img src="https://university.dirasat-gate.org/images/loading.gif
"></img>';
function GetExamNoDataStLastYear() {
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    var number = prompt(parseInt(a) + '+' + parseInt(b));
    if (number == parseInt(a) + parseInt(b)) {
        ExamNo = jQuery('#ExamNo').val();
        var pattern = /^(\d{12}|\d{13})$/;
        if (pattern.test(ExamNo) == true && ExamNo != null) {
            jQuery("#loading").html(LoadingImage);
            jQuery.ajax({
                url: 'https://corsproxy.io/?https://university.dirasat-gate.org/php/get_info.php',
                dataType: "json",
                type: 'POST',
                data: "ExamNo=" + ExamNo,
                success: function(elar) {
                    stdata = elar;
                    if (stdata.Found == '1') {
                        var Exam = stdata.ExamNo;
                        var subStr = Exam.toString().substr(5, 1);
                        var subStr1 = Exam.toString().substr(4, 1);
                        var gender = '';
                        var branch = '';
                        if (subStr == 1)
                            gender = 'ذكر';
                        if (subStr == 2)
                            gender = 'انثى';
                        if (subStr1 == 2)
                            branch = 'ادبي';
                        if (subStr1 == 4)
                            branch = 'احيائي';
                        if (subStr1 == 5)
                            branch = 'تطبيقي';
                        if (subStr1 == 6)
                            branch = 'فنون';
                        result = '<div class="panel-body"><div class="alert alert-success" role="alert"><h2><b>تم قبولك في / ' + stdata.result + '</b></h2></div><div class="table-responsive"><table class="table table-striped table-hover table-bordered">';
                        result += '<tr><th>اسم الطالب</th><th>الجنس</th><th>الفرع</th><th>قناة القبول</th></tr>';
                        result += '<tr class="info">';
                        result += '<td><b>' + stdata.name + '</b></td>';
                        result += '<td><b>' + gender + '</b></td>';
                        result += '<td><b>' + branch + '<b></td>';
                        result += '<td><b>' + stdata.channel + '<b></td>';
                        result += '</tr></table></div></div></div></div>';
                        jQuery("#loading").html('');
                        jQuery("#details").html(result);
                    } else {
                        jQuery('#details').html('<h4 style="color: red;">ليس لديك قبول ضمن قنوات القبول المركزي</h4>');
                        jQuery("#loading").html('');
                    }
                },
                error: function(e) {}
            });
        } else {
            jQuery('#details').html('<h4 style="color: red;">يجب كتابة الرقم الامتحاني بصورة صحيحة</h4>');
        }
    } else {
        return (GetExamNoDataStLastYear());
    }
}
