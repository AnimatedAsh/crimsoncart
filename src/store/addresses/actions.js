export const addAddress = address => {
  return (dispatch, getState, getFirebase) => {
    const userId = getState().firebase.auth.uid;
    return getFirebase()
      .firestore()
      .collection("addresses")
      .add({
        ...address,
        userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_ADDRESS", address });
      })
      .then(err => {
        dispatch({ type: "ADD_ADDRESS_ERROR", err });
      });
  };
};

// export const getAddressList = (userId, orderBy) => dispatch => {
//   return http
//     .get(`${apiEndpoint.apiEndpoint}/documents/addresses`)
//     .then(res => {
//       console.log("action", res.data.documents);
//       let addresses = res.data.documents
//         .map(doc =>
//           Object.assign(doc.fields, { name: doc.name.split("/").slice(-1)[0] })
//         )
//         .map(doc => {
//           const result = {};
//           for (const key in doc) {
//             if (typeof doc[key] === "object") {
//               for (const subkey in doc[key]) {
//                 result[key] = doc[key][subkey];
//               }
//             } else {
//               result[key] = doc[key];
//             }
//           }
//           return result;
//         });

//       //Object(acc, { [doc.name.split("/").slice[-1]]: doc })
//       //);
//       // let { addresses } = res.documents;

//       console.log(addresses);

//       if (userId) {
//         addresses = addresses.filter(a => a.userId === userId);
//       }
//       if (!!orderBy) {
//         addresses = addresses.sort(orderBy);
//       }

//       return dispatch({
//         type: "GET_ADDRESSES",
//         addresses
//       });
//     })
//     .catch(err => {
//       console.log("Could not find addresses for this users", err);
//     });
// };
