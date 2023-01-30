//VD 1

// let [name, age, address] = ['Duy', 24, 'HCMC'];

// function print() {
//     console.log(name);
//     console.log(age);
//     console.log(address);
// }
//setTimeout(print, 2000)


//VD 2
// let a = alert('Day la alert');
// let b = confirm("Day la confirm");
// let c = prompt('Day la prompt');

// console.log(a);
// console.log(b);
// console.log(c);


//Bài 1
// let cDai = prompt('Moi nhap chieu dai:');
// let cRong = prompt('Moi nhap chieu rong:');

// let P1 = 2*(cDai+cRong);
// let S1 = cDai*cRong;


//Bài 2 5
// let R = prompt('Moi nhap Ban kinh hình tròn:');

// let P2 = 2*R* Math.PI;
// let S2 = R*R *Math.PI


//Bai 3
// let numA = prompt('Moi nhap so thu 1:');
// let numB = prompt('Moi nhap so thu 2:');

// let tong = numA+numB;
// let hieu = numA-numB;
// let tich = numA*numB;
// let thuong = numA/numB; //chia binh thuong
// let thuong2 = Math.floor(thuong); // chia lay phan nguyen
// let thuong3 = numA - thuong2*numB; // chi lay phan du

// console.log(thuong);
// console.log(thuong2);
// console.log(thuong3);

//Bài 4
// let a = prompt('Moi nhap he so a:');
// let b = prompt('Moi nhap he so b:')
// let x;
// if(a==0 && b!=0) {
//     console.log('Phuong trinh vo nghiem');
// } else if(a==0 && b==0) {
//     console.log('Phuong trinh co vo so nghiem');
// } else if(a!=0 && b==0) {
//     console.log('Phuong trinh co nghiem x = 0');
// } else {
//      x=-b/a
//     console.log('Phuong trinh co nghiem x =',x.toFixed(2));


//Bai 4
let a = prompt('Moi nhap he so a (a>0):');
let b = prompt('Moi nhap he so b:');
let c = prompt('Moi nhap he so c:');
let x1,x2;
let delta = b*b - 4*a*c;

if(delta==0) {
    x1=-b/(2*a)
    console.log("Phuong trinh co 01 nghiem x= ",x1);
} else if(delta<0) {
    console.log('Phuong trinh da cho vo nghiem');
} else {
    x1 = (-b+Math.sqrt(delta))/(2*a)
    x2 = (-b-Math.sqrt(delta))/(2*a)
    console.log('Phuong trinh da cho co 02 nghiem phan biet.');
    console.log('x1=',x1.toFixed(2));
    console.log('x2=',x2.toFixed(2));
}
