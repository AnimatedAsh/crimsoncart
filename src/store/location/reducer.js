const initState = {
  states: [
    {
      id: "37",
      name: "Andhra Pradesh"
    },
    {
      id: "36",
      name: "Telangana"
    },
    {
      id: "33",
      name: "Tamil Nadu"
    },
    {
      id: "29",
      name: "Karnataka"
    },
    {
      id: "27",
      name: "Maharashtra"
    }
  ],
  cities: [
    {
      id: "TPT",
      statecode: "37",
      name: "Tirupati"
    },
    {
      id: "VSK",
      statecode: "37",
      name: "Vishakhapatnam"
    },
    {
      id: "KKD",
      statecode: "37",
      name: "Kakinada"
    },
    {
      id: "BLR",
      statecode: "29",
      name: "Bangalore"
    },
    {
      id: "MLR",
      statecode: "29",
      name: "Mangalore"
    },
    {
      id: "PUN",
      statecode: "27",
      name: "Pune"
    },
    {
      id: "MUM",
      statecode: "27",
      name: "Mumbai"
    },
    {
      id: "CHN",
      statecode: "33",
      name: "Chennai"
    },
    {
      id: "CMB",
      statecode: "33",
      name: "Coimbatore"
    },
    {
      id: "VLR",
      statecode: "33",
      name: "Vellore"
    },
    {
      id: "HYD",
      statecode: "36",
      name: "Hyderabad"
    },
    {
      id: "WGL",
      statecode: "36",
      name: "Warangal"
    }
  ]
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default locationReducer;
