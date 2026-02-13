"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUpdateProject } from "@/lib/hooks/useProjects";
import { Close, Content, Dialog, Overlay, Title } from "@/components/ui/dialog";
import { Project } from "@/types/project";
import { Pencil, X } from "lucide-react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormRoot,
} from "@/components/ui/form";
import { FormSubmit } from "@radix-ui/react-form";

export default function UpdateProject(data: Project) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [image, setImage] = useState(data.image);
  const [gitHubUrl, setGitHubUrl] = useState(data.gitHubUrl);
  const [demoUrl, setDemoUrl] = useState(data.demoUrl);

  const { mutate, isPending } = useUpdateProject();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      id: data.id,
      title,
      description,
      image,
      createdAt: data.createdAt,
    });

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>
          <Pencil size={16} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Update Project</Title>

          <FormRoot onSubmit={handleOnSubmit}>
            <FormField name="title">
              <FormLabel>Title</FormLabel>
              <FormControl
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormMessage match="valueMissing">Required</FormMessage>
            </FormField>
            <FormField name="Description">
              <FormLabel>Content</FormLabel>
              <FormControl asChild>
                <textarea
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormMessage match="valueMissing">Required</FormMessage>
            </FormField>
            <FormField name="Image">
              <FormLabel>Image URL</FormLabel>
              <FormControl
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </FormField>
            <FormField name="GitHub URL">
              <FormLabel>GitHub URL</FormLabel>
              <FormControl
                type="text"
                value={gitHubUrl}
                onChange={(e) => setGitHubUrl(e.target.value)}
              />
            </FormField>
            <FormField name="Demo URL">
              <FormLabel>Demo URL</FormLabel>
              <FormControl
                type="text"
                required
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
              />
              <FormMessage match="valueMissing">Required</FormMessage>
            </FormField>
            <Close asChild>
              <Button type="button">
                <X />
              </Button>
            </Close>
            <FormSubmit asChild>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save"}
              </Button>
            </FormSubmit>
          </FormRoot>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
