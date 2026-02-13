"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCreateProject } from "@/lib/hooks/useProjects";
import { Close, Content, Dialog, Overlay, Title } from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormRoot,
} from "@/components/ui/form";
import { X } from "lucide-react";
import { FormSubmit } from "@radix-ui/react-form";

export default function CreateProject() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [demoUrl, setDemoUrl] = useState("");

  const { mutate, isPending } = useCreateProject();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      title,
      description,
      image,
      demoUrl,
      gitHubUrl,
    });

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Add Project</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Create Project</Title>
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
