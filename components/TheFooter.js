import styled from "styled-components";

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  line-height: 4rem;
  background-color: #fafafa;
  text-align: center;
  z-index: 10;
`;

const Name = styled.h6`
  font-size: 1rem;
  font-weight: 500;
`;

export default function TheFooter() {
  return (
    <Footer>
      <Name>امیرحسین مکتوبیان</Name>
    </Footer>
  );
}
