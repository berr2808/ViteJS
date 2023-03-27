import { Customer, customerDefaultState } from "@/models";
import { FC } from "react";
import styled from "styled-components";

interface IProps {
  customer: Customer;
}

const HeaderInvoice: FC<IProps> = (props) => {
  const { customer } = props;
  return (
    <Header>
      <p className="mb-2 text-4xl font-semibold">RECEIPT OF PAYMENT</p>
      <p className="font-semibold text-lg">{customer.name}</p>
      <p>{customer.identification}</p>
      <p>{customer.location.state}</p>
      <p>{customer.location.country}</p>
      <p className="mt-2">Mobile: {customer.mobile}</p>
    </Header>
  );
};

HeaderInvoice.defaultProps = {
  customer: customerDefaultState,
};

const Header = styled.div`
  width: 100%;
  text-align: right;
`;

export default HeaderInvoice;
