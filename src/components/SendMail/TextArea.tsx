import React from 'react';
import styled, { css } from 'styled-components';
interface validate {
  title: string;
  isFilled?: boolean;
  validation: boolean;
}
export default function TextArea() {
  const validateArr: validate[] = [
    {
      title: '이름',
      isFilled: false,
      validation: false,
    },
    {
      title: '회사명',
      isFilled: false,
      validation: false,
    },
    {
      title: '전화번호',
      isFilled: false,
      validation: false,
    },
    {
      title: '이메일',
      validation: false,
    },
  ];
  return (
    <Container>
      <InputBox>
        <Name>이름</Name>
        <InputArea type="text" placeholder="이름을 입력해주세요" />
        <ErrorArea>값을 입력해주세요</ErrorArea>
      </InputBox>
      <InputBox>
        <Name>회사명</Name>
        <InputArea type="text" placeholder="회사명을 입력해주세요" />
        <ErrorArea></ErrorArea>
      </InputBox>
      <InputBox>
        <Name>전화번호</Name>
        <InputArea type="text" placeholder="전화번호를 입력해주세요" />
        <ErrorArea></ErrorArea>
      </InputBox>
      <InputBox>
        <Name>이메일</Name>
        <InputArea type="text" placeholder="이메일을 입력해주세요" />
        <ErrorArea></ErrorArea>
      </InputBox>
      <InputBox>
        <Name>주소</Name>
        <AddressArea>
          <AddressInput type="text" placeholder="주소를 검색해주세요" />
          <AddressBtn type="button">주소 찾기</AddressBtn>
        </AddressArea>
        <InputArea type="text" placeholder="상세 주소를 입력해주세요" />
      </InputBox>
      <InputBox>
        <Name>메모</Name>
        <InputArea type="text" placeholder="자유롭게 기입해주세요." />
      </InputBox>
      <SendBtn>문의 등록</SendBtn>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  gap: 30px;
`;
const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #8b8b8b;
`;
const Input = css`
  height: 46px;
  padding: 12px;
  border: 1px solid #ececec;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  outline: none;
  ::placeholder {
    color: #a5a5a5;
  }
  :focus {
    border: 1px solid #5598de;
  }
`;
const InputArea = styled.input`
  ${Input}
  width: 100%;
`;
const ErrorArea = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #ec6b70;
`;
const AddressArea = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;
const AddressInput = styled.input`
  width: 393px;
  ${Input}
`;
const AddressBtn = styled.button`
  width: 79px;
  height: 46px;
  border-radius: 12px;
  padding: 4px;
  background-color: #1d1d1f;
  color: #f5f5f7;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  cursor: pointer;
`;
const SendBtn = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 12px;
  padding: 12px;
  background-color: #a5a5a5;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
`;
