import { FullWidthSection } from "@/components/layout/FullWidthSection";
import Hero from "@/components/scopes/about/Hero";
import Skills from "@/components/scopes/about/Skills";
import { theme } from "@/styles/theme";

export default function About() {
  return (
    <>
      <FullWidthSection>
        <Hero />
      </FullWidthSection>

      <FullWidthSection background={theme.colors.background10}>
        <Skills />
      </FullWidthSection>
    </>
  );
}
