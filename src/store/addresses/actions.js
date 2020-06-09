export const addAddress = (address) => {
  return async (dispatch, getState, getFirebase) => {
    const userId = getState().firebase.auth.uid;
    if (address.defaultAddress)
      await unsetDefaultAddress(userId, dispatch, getFirebase);
    return getFirebase()
      .firestore()
      .collection("addresses")
      .add({
        ...address,
        userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_ADDRESS", address });
      })
      .catch((err) => {
        dispatch({ type: "ADD_ADDRESS_ERROR", err });
      });
  };
};

export const updateAddress = (address, id) => {
  return async (dispatch, getState, getFirebase) => {
    const userId = getState().firebase.auth.uid;
    if (address.defaultAddress)
      await unsetDefaultAddress(userId, dispatch, getFirebase);
    return getFirebase()
      .firestore()
      .collection("addresses")
      .doc(id)
      .update({
        ...address,

        updatedAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "UPDATE_ADDRESS", address });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ADDRESS_ERROR", err });
      });
  };
};

const unsetDefaultAddress = async (userId, dispatch, getFirebase) => {
  const currentdefaultAddress = await getFirebase()
    .firestore()
    .collection("addresses")
    .where("userId", "==", userId)
    .where("defaultAddress", "==", true)
    .get();

  currentdefaultAddress.forEach(function (doc) {
    getFirebase()
      .firestore()
      .collection("addresses")
      .doc(doc.id)
      .update({ defaultAddress: false })
      .then(() => {
        return true;
      })
      .catch((err) => dispatch({ type: "DEFAULT_ADDRESS_UPDATE_ERROR", err }));
  });

  //return currentdefaultAddress.update({ defaultAddress: false });
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
