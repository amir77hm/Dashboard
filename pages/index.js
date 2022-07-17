import Image from "next/image";
import styled from "styled-components";
import HeadTag from "../components/HeadTag";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <HeadTag title="داشبورد" />

      <Image src="/karafs-logo.png" width="100" height="100" />
    </Container>
  );
}
