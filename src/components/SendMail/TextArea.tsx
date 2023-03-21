import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import useDebounce from '../useDebounce';
import DaumPostCode from 'react-daum-postcode';
import { init, send } from 'emailjs-com';
type validate = 0 | 1 | 2 | 3;
export default function TextArea() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  //0 = 초기값     1 = 빈값      2 = 틀린값     3 = 정상값
  const [nameVal, setNameVal] = useState<validate>(0);
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.split(' ').join('').length > 0) {
      setNameVal(3);
    } else {
      setNameVal(1);
    }
  };
  const debounceName = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
    handleName,
    500
  );
  const [coName, setCoName] = useState<string>('');
  const [coNameVal, setCoNameVal] = useState<validate>(0);
  const handleCoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoName(e.target.value);
    if (e.target.value.split(' ').join('').length > 0) {
      setCoNameVal(3);
    } else {
      setCoNameVal(1);
    }
  };
  const debounceCoName = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
    handleCoName,
    500
  );
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [phoneNumVal, setPhoneNumVal] = useState<validate>(0);
  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const phoneNum = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    if (regPhone.test(phoneNum)) {
      setPhoneNumVal(3);
    } else if (e.target.value.split(' ').join('').length > 0) {
      setPhoneNumVal(2);
    } else {
      setPhoneNumVal(1);
    }
  };
  const debouncePhoneNum = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
    handlePhoneNum,
    500
  );
  const [mail, setMail] = useState<string>('');
  const [mailVal, setMailVal] = useState<validate>(0);
  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (emailRegex.test(e.target.value)) {
      setMailVal(3);
    } else if (e.target.value.split(' ').join('').length > 0) {
      setMailVal(2);
    } else {
      setMailVal(1);
    }
  };
  const debounceMail = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
    handleMail,
    500
  );
  const [memo, setMemo] = useState<string>('');
  const handleMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };
  const debounceMemo = useDebounce<[React.ChangeEvent<HTMLTextAreaElement>]>(
    handleMemo,
    500
  );
  const [mainAdd, setMainAdd] = useState<string>('');
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setMainAdd(`${data.address} (${data.zonecode})`);
      setOpenPostcode(false);
    },
  };

  const [detailAdd, setDetailAdd] = useState<string>('');
  const handleDetailAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAdd(e.target.value);
  };
  const debounceDetailAdd = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
    handleDetailAdd,
    500
  );
  const [submitBtnActive, setSubmitBtnActive] = useState<boolean>(false);
  useEffect(() => {
    if (
      nameVal === 3 &&
      coNameVal === 3 &&
      phoneNumVal === 3 &&
      mailVal !== 2
    ) {
      setSubmitBtnActive(true);
    } else {
      setSubmitBtnActive(false);
    }
  }, [nameVal, coNameVal, phoneNumVal, mailVal]);
  useEffect(() => {
    init('6ImY6qJGI-FW9Lc2R');
  }, []);
  const handleSubmit = async () => {
    await send('service_tzamggn', 'template_de3dv9m', {
      name: name,
      coName: coName,
      phoneNum: phoneNum,
      mail: mail,
      mainAdd: mainAdd,
      detailAdd: detailAdd,
      memo: memo,
    }).then(
      (res) => {
        window.alert('메일이 보내졌습니다!');
        navigate('/');
      },
      (error) => {
        window.alert('오류가 발생했습니다..');
        console.error(error);
      }
    );
  };
  return (
    <Container>
      <InputBox>
        <Name>이름</Name>
        <InputArea
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={debounceName}
          maxLength={5}
        />
        <ErrorArea>{nameVal === 1 && '이름을 입력해주세요'}</ErrorArea>
      </InputBox>
      <InputBox>
        <Name>회사명</Name>
        <InputArea
          type="text"
          placeholder="회사명을 입력해주세요"
          onChange={debounceCoName}
        />
        <ErrorArea>{coNameVal === 1 && '회사명을 입력해주세요'}</ErrorArea>
      </InputBox>
      <InputBox>
        <Name>전화번호</Name>
        <InputArea
          type="text"
          placeholder="전화번호를 입력해주세요. (010-0000-0000)"
          onChange={debouncePhoneNum}
          maxLength={13}
        />
        <ErrorArea>
          {phoneNumVal === 1
            ? '전화번호를 입력해주세요'
            : phoneNumVal === 2
            ? '010-0000-0000 형태로 입력해주세요'
            : null}
        </ErrorArea>
      </InputBox>
      <InputBox>
        <Name>이메일</Name>
        <InputArea
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={debounceMail}
        />
        <ErrorArea>{mailVal === 2 && '올바른 형태로 입력해주세요'}</ErrorArea>
      </InputBox>
      <InputBox>
        <Name>주소</Name>
        <AddressArea>
          <InputContainer>
            <AddressInput
              type="text"
              placeholder="주소를 검색해주세요"
              disabled={true}
              value={mainAdd}
            />
            <AddressBtn type="button" onClick={handle.clickButton}>
              주소 찾기
            </AddressBtn>
          </InputContainer>
          <div>
            {openPostcode && (
              <PostCodePopUp
                onComplete={handle.selectAddress}
                autoClose={false}
              />
            )}
          </div>
        </AddressArea>
        <InputArea
          type="text"
          placeholder="상세 주소를 입력해주세요"
          onChange={debounceDetailAdd}
        />
      </InputBox>
      <InputBox>
        <Name>메모</Name>
        <MemoArea
          placeholder="자유롭게 기입해주세요."
          onChange={debounceMemo}
          rows={3}
        />
      </InputBox>
      <SendBtn type="button" onClick={handleSubmit} disabled={!submitBtnActive}>
        문의 등록
      </SendBtn>
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
  :nth-child(-n + 3) {
    p:first-child {
      position: relative;
      ::before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        background-color: #ec6b70;
        position: absolute;
        top: 0px;
        right: -4px;
        border-radius: 100%;
      }
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;
const Name = styled.p`
  display: flex;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  outline: none;
  ::placeholder {
    color: #a5a5a5;
    font-weight: 500;
  }
  :focus {
    border: 1px solid #5598de;
  }
`;
const MemoArea = styled.textarea`
  ${Input}
  width: 100%;
  resize: none;
  height: 106px;
  font-weight: 500;
  ::placeholder {
    font-weight: 400;
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
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
const AddressInput = styled.input`
  width: 393px;
  ${Input}
`;
const changeGradient = keyframes`
    0%{
      background-position-x: 0;
    }
 
    100%{
     background-position-x: 200px;
    }
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
  &:hover {
    border: 1px solid transparent;
    color: white;

    background: linear-gradient(
      to right,
      #2ed1af 0%,
      #5598de 19%,
      #7f87ff 40%,
      #eb5ac0 60%,
      #7f87ff 76%,
      #5598de 90%,
      #2ed1af 100%
    );
    background-size: 200px 100%;
    animation: ${changeGradient} 1.5s linear infinite;
  }
`;
const SendBtn = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 12px;
  padding: 12px;
  background-color: #1d1d1f;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  :disabled {
    background-color: #a5a5a5;
    cursor: default;
  }
`;
const PostCodePopUp = styled(DaumPostCode)`
  width: 100%;
`;
