// function myHTTP(){
//   this.http = new XMLHttpRequest();
// }
//
// myHTTP.prototype.get = function(url, callback){
//   this.http.open('GET', url, true);
//   this.http.onload = function(){
//     if (this.status === 200) {
//       callback(null, this.responseText);
//     }else{
//       callback('There is a error'+ this.status);
//     }
//   }
//   this.http.send();
// }
//
// myHTTP.prototype.post = function(url, data, callback){
//   this.http.open('POST', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');
//   this.http.onload = function(){
//     if (this.status === 200) {
//       callback(null, this.responseText);
//     }else{
//       callback('There is an error'+ this.status);
//     }
//   }
//   this.http.send(JSON.stringify(data));
// }
//
// myHTTP.prototype.delete = function(url, callback){
//   this.http.open('DELETE', url, true);
//   this.http.onload = function(){
//     if (this.status === 200) {
//       callback(null, this.responseText);
//     }else{
//       callback('There is a error'+ this.status);
//     }
//   }
//   this.http.send();
// }
