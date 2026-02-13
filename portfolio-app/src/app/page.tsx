import { FullWidthSection } from "@/components/layout/FullWidthSection";
import Hero from "@/components/scopes/landing/Hero";
import { theme } from "@/styles/theme";
import Projects from "@/components/scopes/landing/Projects";

export default function Home() {
  return (
    <div>
      <>
        <FullWidthSection>
          <Hero />
        </FullWidthSection>

        <FullWidthSection background={theme.colors.background10}>
          <Projects />
        </FullWidthSection>
      </>
    </div>
  );
}
