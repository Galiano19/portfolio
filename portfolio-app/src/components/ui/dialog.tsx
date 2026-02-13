import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 50;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  overflow-y: auto;
  z-index: 51;
`;

const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled(Dialog.Description)`
  margin-bottom: 1.5rem;
  color: ${theme.colors.font};
  opacity: 0.8;
`;

const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${theme.colors.font};
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  
  &:hover {
    opacity: 0.7;
  }
`;

export { Dialog, Overlay, Content, Title, Description, Close };
