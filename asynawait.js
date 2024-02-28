//- Callback, promise hay asynawait dùng để giải quyết vấn đề bất đồng bộ.
//- Callback lồng nhau có thể dẫn đến callback hell, gây khó đọc, khó hiểu, khó bảo trì, phát triển code về sau.
//- Dùng promise giống callback nhưng giải quyết được vấn đề callback hell.
//- asyn, await để giống promise nhưng làm code dễ đọc hơn, code bất đòng bộ nhưng đọc như đồng bộ, tất cả những gì trả về trong async function
//sẽ được quăng vô promise.

// //Code đồng bộ
// console.log('sync')
// console.log(1);
// console.log(2);
// console.log(3);
// // in ra 1 2 3
// //Code ko đồng bộ
// console.log('async')
// setTimeout(()=>{
//   console.log(1);
// },1000);
// console.log(2);
// console.log(3);
// in ra 2 3 1
//nếu đồng bộ thì nó sẽ đợi 1s rồi in ra 1 sau đó in 2 3
//vậy có thể hiểu bất đồng bộ là nó thực hiện tác vụ khác mà ko cần đợi hoàn thành xong 1 tác vụ này

// console.log('Callback hell');
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
          
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log('promise')
// var promise = Promise.resolve();
// promise
//   .then(()=>{
//     console.log(1);
//   })
//   .then(()=>{
//     console.log(2);
//   })
//   .then(()=>{
//     console.log(3);
//   })
//   .then(()=>{
//     console.log(4);
//   })

// console.log('async await');
const print= (num)=>{
  return num;
}
let func = async ()=>{
  const a=await print(1);
  console.log(a);
  const b=await print(2);
  console.log(b);
  const c=await print(3);
  console.log(c);
};