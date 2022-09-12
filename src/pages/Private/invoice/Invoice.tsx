import { HeaderInvoice } from "./components";
import styled from "styled-components";

const Invoice = () => {
  return (
    <InvoiceContainer>
      <HeaderInvoice />
    </InvoiceContainer>
  );
};

const InvoiceContainer = styled.div`
  color: #000;
  background: #fff;
  padding: 5px;
`;

export default Invoice;
