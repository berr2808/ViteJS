import { Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

interface IProps {}

const HeaderInvoice: FC<IProps> = (props) => {
  return (
    <Header>
      <Typography variant="h4">RECEIPT OF PAYMENT</Typography>
      <Typography variant="subtitle1">Byron Eliezer Rocha Rodriguez</Typography>
      <Typography variant="body2">489-280897-0000Q</Typography>
      <Typography variant="body2">Managua</Typography>
      <Typography variant="body2">Nicaragua</Typography>
    </Header>
  );
};

const Header = styled.div`
  text-align: right;
`;

export default HeaderInvoice;
