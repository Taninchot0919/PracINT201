//run code in the box
//#bcf4e4
//#c4e4f4
//red
//lightblue

//ใช้ dom ไปหาที่กล่อง
let dom = document.getElementById('box');
//โดยที่จะทำงานทุกครั้งถ้าเกิดการพิมพ์ในกล่อง
dom.addEventListener("keyup", function () {
    //ถ้าไม่ได้ใส่อะไรให้แสดงหน้าขาวไว้
    if (dom.value == "") {
        document.body.style.backgroundColor = 'white';
        //ถ้าไม่ใช่ก็ให้ใส่โค้ดสี หรือ ค่าสีลงไปและเปลี่ยนสีพื้นหลัง
    } else
        document.body.style.backgroundColor = dom.value;
});