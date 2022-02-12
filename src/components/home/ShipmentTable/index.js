import styled from "styled-components";

// Components
import { IconButton } from "../../common/Buttons";

const Table = styled.table`
  margin: 48px 0;

  width: 100%;
  border-collapse: inherit;
`;
const TableRow = styled.tr`
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;
const TableData = styled.td`
  padding: 32px 0;
`;
const TableText = styled.p`
  ${({ lightColor }) =>
    lightColor
      ? `
        font-size: 0.875rem;
        line-height: 1rem;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom:4px;
      `
      : `
        font-size: 1rem;
        line-height: 1.5rem;
      `};
`;

export default function ShipmentTable() {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableData>
            <TableText lightColor>Status</TableText>
            <TableText>Ready</TableText>
          </TableData>
          <TableData>
            <TableText lightColor>Order ID</TableText>
            <TableText>009-300FCT</TableText>
          </TableData>
          <TableData>
            <TableText lightColor>Technician</TableText>
            <TableText>Ben Santana</TableText>
          </TableData>
          <TableData>
            <TableText lightColor>Platform</TableText>
            <TableText>Gamma</TableText>
          </TableData>
          <TableData>
            <TableText lightColor>Drone</TableText>
            <TableText>DJI-004Q</TableText>
          </TableData>
          <TableData>
            <TableText lightColor>Technical check</TableText>
            <TableText>Passed</TableText>
          </TableData>
          <TableData>
            <IconButton
              icon={
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-6.10352e-05 0V16H19.9999V0H-6.10352e-05ZM17.9999 4.67H15.4999V2H17.9999V4.67ZM15.4999 6.67H17.9999V9.34H15.4999V6.67ZM1.99994 2H13.4999V14H1.99994V2ZM15.4999 14V11.33H17.9999V14H15.4999Z"
                    fill="black"
                    fillOpacity="0.25"
                  />
                </svg>
              }
            >
              Details
            </IconButton>
          </TableData>
          <TableData>
            <IconButton
              icon={
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.40994 0.590088L5.99994 5.17009L10.5899 0.590088L11.9999 2.00009L5.99994 8.00009L-6.10352e-05 2.00009L1.40994 0.590088Z"
                    fill="black"
                    fillOpacity="0.25"
                  />
                </svg>
              }
            >
              Actions
            </IconButton>
          </TableData>
        </TableRow>
      </tbody>
    </Table>
  );
}
