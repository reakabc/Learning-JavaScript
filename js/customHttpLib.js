// class myHTTP{
//
//   async get(url){
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   }
//
//   post(url, data){
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     })
//   }
//
//   put(url, data){
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     })
//   }
//
//   delete(url, data){
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     })
//   }
//
// }
