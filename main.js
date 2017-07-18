fetch("http://www.recipepuppy.com/api/?q=gluten");
  .then(function(response) {
    if {

    } else {
      
    }

)}





























//   .then(function(response) {
//     if (response.status !== 200) {
//       console.log(response.status);
//       return;
//     }
//     response.json().then(function(data) {
//       console.log("test", response.url);
//     });
//   })
//   .catch(function(err) {
//     console.log("Fetch Error", err);
//   });
//
//   function fetchGET("http://www.recipepuppy.com/api/"
// ) {
//     fetch("http://www.recipepuppy.com/api/"
// )
//       .then(function(response) {
//         if (
//           response.headers.get("content-type").indexOf("application/json") !== -1
//         ) {
//           // checking response header
//           //.json() parses the response.
//           return response.json();
//         } else {
//           throw new TypeError(
//             'Response from "' + url + '" has unexpected "content-type"'
//           );
//         }
//       })
//       .then(function(data) {
//         console.log('JSON from "' + url + '" parsed successfully!');
//         console.log(data);
//       })
//       .catch(function(error) {
//         console.error(error.message);
//       });
//   }
//
//   fetchGET(www.recipepuppy.com/api/);
