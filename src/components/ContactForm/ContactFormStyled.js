import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 20px auto;
  width: 480px;
  padding: 20px;
  min-height: 140px;
  border: 1px solid lightgray;
`;

export const Label = styled.label`
  width: 260px;
  display: flex;
  justify-content: space-between;
`;
