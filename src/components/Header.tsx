import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [pageScroll, setPageScroll] = useState(false);
  const handleScroll = () => {
    window.scrollY === 0 ? false : true;
    setPageScroll(window.scrollY === 0 ? false : true);
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', () => {
        handleScroll;
      });
    };
    scrollListener;
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`${
          pageScroll
            ? 'text-[#1d1d1f] bg-[rgba(255,255,255,0.3)] border-b-[#d9d9d9] border'
            : 'text-white bg-transparent'
        } px-5 fixed w-full h-[52px] items-center flex justify-between duration-300`}
      >
        <div>
          <p className="font-bold text-[21px]">Choi.HY</p>
        </div>
        <div className="w-[249px] items-center flex gap-6">
          <button className="duration-300 text-[14px] hover:text-[#2ed1af]">
            프로젝트
          </button>
          <button className="duration-300 text-[14px] hover:text-[#7f87ff]">
            스킬
          </button>
          <button className="duration-300 text-[14px] hover:text-[#f65aad]">
            FAQ
          </button>
          <Link
            to="/sendMail"
            className="text-[14px] border boder-[#1d1d1f] rounded-[16px] leading-[22px] w-[72px] h-[30px] flex items-center justify-center [background: linear-gradient(to right, #2ed1af 0%, #5598de 19%, #7f87ff 40%, #eb5ac0 60%, #7f87ff 76%, #5598de 90%, #2ed1af 100%);]"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}
