import styled from "styled-components";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

type Props = {
  children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  return (
    <LayoutWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}
