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
            <IconButton icon={<DetailsIcon />}>Details</IconButton>
          </TableData>
          <TableData>
            <IconButton icon={<ArrowDownIcon />}>Actions</IconButton>
          </TableData>
        </TableRow>
      </tbody>
    </Table>
  );
}
