import { getNameMonths, lastDayOfMonth, YEAR } from "@/helpers";

import { Download } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { FC, useState, useRef } from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import { customerDefaultState } from "@/models";

import { HeaderInvoice } from "./components";

interface IProps {}

const Invoice: FC<IProps> = (props) => {
  const [dateFormat, setDateFormat] = useState<string>("");

  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<string>("");

  const MONTHS = getNameMonths(enUS);
  const UNIT = "$";

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice-" + dateFormat,
  });

  const handleMonth = (month: string) => {
    formatDate(month, day);
    setMonth(month);
  };

  const handleDay = (day: number) => {
    formatDate(month, day);
    setDay(day);
  };

  const formatDate = (month: string, day: number) => {
    let _month = month || format(new Date(), "MMMM", { locale: enUS });
    let _day = day;

    let _date =
      _month + " " + _day + ", " + format(new Date(), "yyy", { locale: enUS });

    setDateFormat(format(new Date(_date), "PPP"));
  };

  const services = [
    {
      name: "2023-03-27",
      hours: 1,
      price: 15.0,
    },
    {
      name: "2023-03-28",
      hours: 4,
      price: 60.0,
    },
    {
      name: "2023-03-29",
      hours: 1,
      price: 15.0,
    },
    {
      name: "2023-03-30",
      hours: 2,
      price: 30.0,
    },
    // {
    //   name: "Services Amount Educational software development in the cloud",
    //   price: 600.0,
    // },
  ];

  return (
    <Container className="flex flex-row  content-center">
      <div>
        {MONTHS.map((month, index) => {
          return (
            <div key={index}>
              <Button onClick={() => handleMonth(month)}>{month}</Button>
            </div>
          );
        }) || <div>Months...</div>}
      </div>
      <div className="relative m-5 ">
        <div className="static">
          <div className="absolute left-0 top-0 ">
            <ul className="flex flex-row">
              <li className="mr-2">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleDay(15)}
                >
                  15
                </Button>
              </li>
              <li>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleDay(lastDayOfMonth(month))}
                >
                  {lastDayOfMonth(month)}
                </Button>
              </li>
              <li>
                <IconButton
                  onClick={() => {
                    handlePrint();
                  }}
                  aria-label="download"
                  color="primary"
                >
                  <Download />
                </IconButton>
              </li>
            </ul>
          </div>
          <div
            ref={componentRef}
            className="m-5 w-[800px] grid overflow-hidden grid-lines grid-cols-2 gap-px bg-[#ffffff] text-[#000000]"
          >
            <div className="px-3 box row-start-1 col-span-2 border-b-2">
              <HeaderInvoice customer={customerDefaultState} />
            </div>
            <div className="px-3 box col-span-2">
              <div className="flex justify-between items-center w-auto py-4">
                <div className="item w-1/2 ">
                  <p className="font-semibold">Bill to</p>
                  <p className="font-bold">
                    Compañía de Software Pura Vida. 3-101-837369
                  </p>
                  {/* <p className="font-bold">
                    EduTech de Centroamérica #3101696513
                  </p> */}
                  {/* <p>Cartago</p> */}
                  <p>Cartago, La Union, Concepcion</p>
                  <p className="mt-3">cspvfe@tlconsultores.net</p>
                  <p className="">+506 21008013</p>
                </div>
                <div className="item w-1/2 ">
                  <table className="table-auto w-full shadow-none">
                    <tbody>
                      {/* <tr className="">
                        <td className=" text-right w-1/2">
                          <p className="font-bold">Invoice Number:</p>
                        </td>
                        <td className="pl-3  w-1/2">12</td>
                      </tr> */}
                      <tr className="">
                        <td className=" text-right">
                          <p className="font-bold">Invoice Date:</p>
                        </td>
                        <td className="pl-3 w-1/2">{dateFormat}</td>
                      </tr>
                      <tr className="">
                        <td className=" text-right">
                          <p className="font-bold">Payment Due:</p>
                        </td>
                        <td className="pl-3 w-1/2">{dateFormat}</td>
                      </tr>
                      <tr className=" bg-blue-100">
                        <td className=" text-right ">
                          <p className="font-bold">Amount Due (USD):</p>
                        </td>
                        <td className="pl-3 w-1/2">
                          {UNIT +
                            services.reduce((a, b) => a + b.price, 0) +
                            ".00"}{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="box col-span-2">
              <table className="bg-white text-gray-900 table-auto w-full shadow-none">
                <thead>
                  <tr>
                    <th className="text-left bg-[#2560f5] text-white p-2 w-3/4">
                      Date{" "}
                    </th>

                    <th className="text-right bg-[#2560f5] text-white p-2 w-1/4">
                      Hours
                    </th>
                    <th className="text-right bg-[#2560f5] text-white p-2 w-1/4">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => {
                    return (
                      <tr key={index}>
                        <td className="p-2 text-left ">{service.name}</td>
                        <td className="p-2 text-right">{service.hours}</td>
                        <td className="p-2 text-right">
                          {UNIT + service.price + ".00"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="box col-span-2">
              <div className="border-t-2 mb-4 flex flex-row-reverse">
                <table className="border-b-2  table-auto  w-1/2 shadow-none">
                  <tbody className="">
                    <tr className="">
                      <td className="py-4 text-right w-1/2">
                        <p className="font-bold">Total:</p>
                      </td>
                      <td className="pl-3 p-2 text-right  w-1/2">
                        {services.reduce((a, b) => a + b.hours, 0)}
                      </td>
                      <td className="pl-3 p-2 text-right  w-1/2">
                        {UNIT +
                          services.reduce((a, b) => a + b.price, 0) +
                          ".00"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  color: #000;
`;

export default Invoice;
