/**
 *  Function สุ่มโค้ดสี
 */
function randomColor() {
    let randomCode = Math.floor(Math.random() * 5) + 1;
    switch (randomCode) {
        case 1: return '#C1E7E3'
        case 2: return '#DCFFFB'
        case 3: return '#BDDAE6'
        case 4: return '#4E98B8'
        case 5: return '#7CCFD1'
    }
}
// เมื่อเราเอาเม้าไปวางบนปุ่ม ปุ่มจะเปลี่ยนสี ( ได้จากการสุ่ม randomColor() ) เมื่อเราเอาเม้าออกปุ่มจะเป็นสีขาว และเมื่อเราคลิกในขณะที่เป็นสีไหนอยู่ พื้นหลังของทั้งหน้าจะเปลี่ยนเป็นสีนั้นๆ
/* จะให้ลองสร้าง fucntion ขึ้นมาก่อน อย่าพึ่งสร้าง event!!! */