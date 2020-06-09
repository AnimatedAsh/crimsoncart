import React from "react";
import { AddressSummaryCard } from "../addressSummaryCard";
describe("Address Summary Card test", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      address: {
        id: "1",
        fullName: "Takane Saibara",
        streetAddress: "H.No: 558, Madhura Nagar, Lane 3, Begumpet",
        landMark: "HS Hospital",
        city: "HYD",
        state: "36",
        pin: "500006",
        phoneNumber: "7923465664",
      },
      states: [
        {
          id: "37",
          name: "Andhra Pradesh",
        },
        {
          id: "36",
          name: "Telangana",
        },
      ],
      cities: [
        {
          id: "HYD",
          statecode: "36",
          name: "Hyderabad",
        },
        {
          id: "WGL",
          statecode: "36",
          name: "Warangal",
        },
      ],
    };
    wrapper = shallow(<AddressSummaryCard {...props} />);
  });

  it("should render without errors", () => {
    expect(wrapper).toBeDefined();
  });
});
