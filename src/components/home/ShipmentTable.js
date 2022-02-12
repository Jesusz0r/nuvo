import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import { IconButton } from "../common/Buttons";

// Icons
import { ReactComponent as DetailsIcon } from "../../icons/details.svg";
import { ReactComponent as ArrowDownIcon } from "../../icons/arrow-down.svg";

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
      : ""};
`;

export default function ShipmentTable({ orders, openModalClick }) {
  return (
    <Table>
      <tbody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableData>
              <TableText lightColor>Status</TableText>
              <TableText>{order.status || "-"}</TableText>
            </TableData>
            <TableData>
              <TableText lightColor>Order ID</TableText>
              <TableText>{order.id || "-"}</TableText>
            </TableData>
            <TableData>
              <TableText lightColor>Technician</TableText>
              <TableText>{order.technician || "-"}</TableText>
            </TableData>
            <TableData>
              <TableText lightColor>Platform</TableText>
              <TableText>{order.platform || "-"}</TableText>
            </TableData>
            <TableData>
              <TableText lightColor>Drone</TableText>
              <TableText>{order.drone || "-"}</TableText>
            </TableData>
            <TableData>
              <TableText lightColor>Technical check</TableText>
              <TableText>{order.technicalCheck || "-"}</TableText>
            </TableData>
            <TableData>
              <IconButton icon={<DetailsIcon />}>
                <Link to={`/shipment/${order.id}`}>Details</Link>
              </IconButton>
            </TableData>
            <TableData>
              <IconButton icon={<ArrowDownIcon />} onClick={openModalClick}>
                Actions
              </IconButton>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
