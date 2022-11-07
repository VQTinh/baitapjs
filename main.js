// bài tập 1, Quản lý tuyển sinh
function diem() {
  // điểm 3 môn
  var dm1 = document.getElementById("dm1").value * 1;
  var dm2 = document.getElementById("dm2").value * 1;
  var dm3 = document.getElementById("dm3").value * 1;
  var dtm = dm1 + dm2 + dm3;
  //điểm chuẩn
  var dc = document.getElementById("dc").value * 1;
  // khu vực

  var a = document.getElementById("area").value;

  // đối tượng

  var s = document.getElementById("subject").value * 1;

  //diểm tổng kết
  var dtk;
  //kết quả ts
  var kq;

  if (a === "A" && s === 1) {
    dtk = 2 + 2.5 + dtm;
  } else if (a === "A" && s === 2) {
    dtk = 2 + 1.5 + dtm;
  } else if (a === "A" && s === 3) {
    dtk = 2 + 1 + dtm;
  } else if (a === "B" && s === 1) {
    dtk = 1 + 2.5 + dtm;
  } else if (a === "B" && s === 2) {
    dtk = 1 + 1.5 + dtm;
  } else if (a === "B" && s === 3) {
    dtk = 1 + 1 + dtm;
  } else if (a === "C" && s === 1) {
    dtk = 0.5 + 2.5 + dtm;
  } else if (a === "C" && s === 2) {
    dtk = 0.5 + 1.5 + dtm;
  } else if (a === "C" && s === 3) {
    dtk = 0.5 + 1 + dtm;
  } else {
    dtk = dtm;
  }
  if (dm1 > 0 && dm2 > 0 && dm3 > 0 && dtk >= dc) {
    kq = "bạn đã đậu " + dtk;
  } else {
    kq = "bạn đã rớt ";
  }

  document.getElementById("kqts").innerHTML = kq;
}

//Tính tiền điện
function ttd() {
  var name = document.getElementById("name").value;
  var sKw = document.getElementById("sKw").value * 1;
  var str;

  if (sKw <= 50) {
    str = 500 * sKw;
  } else if (sKw > 50 && sKw <= 100) {
    str = 500 * 50 + (sKw - 50) * 650;
  } else if (sKw > 100 && sKw <= 200) {
    str = 500 * 50 + 650 * 50 + (sKw - 100) * 850;
  } else if (sKw > 200 && sKw <= 350) {
    str = 500 * 50 + 650 * 50 + 850 * 100 + (sKw - 200) * 1100;
  } else if (sKw > 350) {
    str = 500 * 50 + 650 * 50 + 850 * 100 + 150 * 1100 + (sKw - 350) + 1300;
  }
  document.getElementById("kqtd").innerHTML =
    "tiền của bạn " + name + ": là " + str + "  nghìn đồng  ";
}

//Tính thuế thu nhập cá nhân
function thue() {
  var ten = document.getElementById("ten").value;
  var ttnn = document.getElementById("ttnn").value * 1;
  var snpt = document.getElementById("snpt").value * 1;
  
  //với công thức thu nhập chịu thuế = tổng thu nhập năm -4tr - số người phụ thuộc *1.6tr ta có:
  //Thu nhập phải chịu thuế = Tổng tiền lương nhận được - Các khoản được miễn thuế.
  var tnct = ttnn - 4e+6;
  //Thu nhập tính thuế = Thu nhập phải chịu thuế - các khoản giảm trừ.
  var tntt = tnct - (snpt * 1.6e+6);
  //Thuế thu nhập cá nhân cần nộp = Thu nhập tính thuế x Thuế suất.
  var ttncn;

  if (tntt>0 && tntt <= 60e+6) {
    ttncn = tntt * 0.05;
  } else if (tntt > 60e+6 && tntt <= 120e+6) {
    ttncn = 0.1 * tntt - 0.25e+6 * 12;
  } else if (tntt > 120e+6 && tntt <= 210e+6) {
    ttncn = 0.15 * tntt - 0.75e+6 * 12;
  } else if (tntt > 216e+6 && tntt <= 384e+6) {
    ttncn = 0.2 * tntt - 1.65e+6 * 12;
  } else if (tntt > 384e+6 && tntt <= 624e+6) {
    ttncn = 0.25 * tntt - 3.25e+6 * 12;
  } else if (tntt > 624e+6 && tntt <= 960e+6) {
    ttncn = 0.3 * tntt - 5.85e+6 * 12;
  } else if(tntt>960+6) {
    ttncn = 0.35 * tntt - 9.85e+6 * 12;
  }else{
    ttncn = 0
  }

  const number = ttncn;

  document.getElementById("thue").innerHTML = "bạn "+ten+ " đóng " + new Intl.NumberFormat().format(number) ;
}


//Tính tiền cáp
function lkh(){
    var x = document.getElementById("lkh").value;
    
    if(x=== "doanhn"){
        document.getElementById("skn").style.opacity=1;
    }
}
function tiencap(){
    var lkh = document.getElementById("lkh").value;
    var mkh = document.getElementById("mkh").value;
    var skcc = document.getElementById("skcc").value*1;
    var skn = document.getElementById("skn").value;
    
    var nd; 
    var dn 
    nd = 4.5 + 20.5 + 7.5* skcc;
    // dn = 15 + 75*pdv;
    if(skcc<=10){
        dn = 15 + 75*skcc;

    }else{
        dn = 15 + (75*10)+5*(skcc-10)
    }
    document.getElementById("tieccap").innerHTML = nd + dn

}
