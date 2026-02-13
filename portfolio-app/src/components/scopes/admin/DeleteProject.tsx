"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDeleteProject } from "@/lib/hooks/useProjects";
import {
  Content,
  Description,
  Dialog,
  Overlay,
  Title,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import styled from "styled-components";

const OptionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export default function DeleteProject({ id }: { id: string }) {
  const [open, setOpen] = useState(false);

  const { mutate } = useDeleteProject();

  const handleOnClick = () => {
    mutate(id);

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>
          <Trash size={16} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Are you sure?</Title>
          <Description>This action cannot be reversed.</Description>
          <OptionsWrapper>
            <Button type="button" onClick={handleOnClick}>
              Confirm
            </Button>
            <Dialog.Close asChild>
              <Button type="button">Cancel</Button>
            </Dialog.Close>
          </OptionsWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
