import * as Form from "@radix-ui/react-form";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const FormRoot = styled(Form.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormField = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled(Form.Label)`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.font};
`;

const FormControl = styled(Form.Control)`
  padding: 0.5rem;
  background: ${theme.colors.background10};
  border: 1px solid ${theme.colors.border};
  border-radius: 0.375rem;
  color: ${theme.colors.font};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const FormMessage = styled(Form.Message)`
  font-size: 0.875rem;
  color: #ef4444;
`;

export { FormRoot, FormField, FormLabel, FormControl, FormMessage, Form };
