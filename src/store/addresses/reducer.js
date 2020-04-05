const initState = {
  addresses: [
    //   {
    //     id: "1",
    //     fullName: "Takane Saibara",
    //     streetAddress: "H.No: 558, Madhura Nagar, Lane 3, Begumpet",
    //     landMark: "HS Hospital",
    //     city: "Hyderabad",
    //     state: "Telangana",
    //     pin: "500006",
    //     phoneNumber: "7923465664"
    //   },
    //   {
    //     id: "2",
    //     fullName: "Haruhisa Furumi",
    //     streetAddress: "H.No: 558, Madhura Nagar, Lane 3, Begumpet",
    //     landMark: "HS Hospital",
    //     city: "Hyderabad",
    //     state: "Telangana",
    //     pin: "500006",
    //     phoneNumber: "7923465664"
    //   }
  ]
};

const addressesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      console.log(action);
      console.log("addAddress", action.address);
      return state;
    case "ADD_ADDRESS-ERROR":
      console.log("Add address error", action.err);
      return state;
    case "GET_ADDRESSES":
      console.log("get addresses", action.addresses);
      return { ...state, addresses: action.addresses };
    default:
      return state;
  }
};

export default addressesReducer;
