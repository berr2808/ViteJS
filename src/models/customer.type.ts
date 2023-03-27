export const CustomerKey = "customer";

export interface CustomerLocation {
  state: string;
  country: string;
}

export interface Customer {
  id: string | number;
  name: string;
  identification: string;
  Amount: string;
  mobile: string;
  location: CustomerLocation;
}

export const customerEmptyState: Customer = {
  id: "",
  name: "",
  identification: "",
  Amount: "",
  mobile: "",
  location: {
    state: "",
    country: "",
  },
};

export const customerDefaultState: Customer = {
  id: 1,
  name: "Byron Eliezer Rocha Rodriguez",
  identification: "489-280897-0000Q",
  Amount: "$600.00",
  mobile: "+505 87029392",
  location: { state: "Managua", country: "Nicaragua" },
};
