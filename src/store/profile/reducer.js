const initState = {
  items: [
    {
      faIcon: {
        name: "userOrders",
        classes: "box-open theme-color",
        styles: ["fas", "box-open"],
        size: "4x"
      },
      data: {
        id: "orders",
        title: "Your Orders",
        details: "Manage and Track your Orders"
      }
    },
    {
      faIcon: {
        name: "userAddresses",
        classes: "box-open theme-color",
        styles: ["fas", "map-marker-alt"],
        size: "4x"
      },
      data: {
        id: "addresses",
        title: "Your Addresses",
        details: "Manage and Track your Addresses"
      }
    }
  ]
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;
