import { styled } from "styled-components";

export const StyledTextarea = styled.textarea`
  font-size: 14px;
  padding: 13px 10px;
  width: -webkit-fill-available;
  border-radius: 8px;
  border: 1px solid #e4e4e7;

  &:focus {
    outline: none;
    border: 1px solid #a1a1aa;
  }
`;
