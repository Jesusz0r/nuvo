import styled from "styled-components";

// Icons
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as ArrowDownIcon } from "../../icons/arrow-down.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
`;
const BaseInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 6px 16px;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
const SearchInput = styled(BaseInput)`
  padding: 6px 16px 6px 48px;
`;
const SelectInput = styled(BaseInput)`
  -webkit-appearance: none;
`;
const IconContainer = styled.div`
  position: relative;
  width: 100%;
`;
const SearchInputIcon = styled(SearchIcon)`
  position: absolute;
  top: 12px;
  left: 20px;
`;
const SelectInputIcon = styled(ArrowDownIcon)`
  position: absolute;
  top: 15px;
  right: 20px;
`;

export default function Input({ id, type, label, options, ...props }) {
  if (type === "search") {
    return (
      <Container>
        <Label htmlFor={id}>{label}</Label>

        <IconContainer>
          <SearchInputIcon />
          <SearchInput type="text" {...props} />
        </IconContainer>
      </Container>
    );
  }

  if (type === "dropdown") {
    return (
      <Container>
        <Label htmlFor={id}>{label}</Label>

        <IconContainer>
          <SelectInputIcon />
          <SelectInput as="select" {...props}>
            <option value="">-</option>

            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </SelectInput>
        </IconContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <BaseInput type="text" {...props} />
    </Container>
  );
}
