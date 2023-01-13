import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 50px;
  background-color: #222;

  & * {
    color: white;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;
`;

export const HeaderText = styled.h1`
  color: pink;
`;

export const SpinnerWrapper = styled.div`
  margin-top: 20px;
`;

export const ClearTextIcon = styled(IoIosClose)`
  flex-shrink: 0;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const SearchInputWrapper = styled.div`
  padding: 16px 24px;
  border: thin solid #444;
  border-radius: 12px;
  min-height: 58px;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 18px;
  color: white;

  &::placeholder {
    color: #ccc;
  }
`;
