import { HeroContent } from "./HeroContent";
import { ProjectSlider } from "./ProjectSlider";

export function HeroSection({ projects, onOpenForm }) {
  return (
    <section className="relative flex items-center hero-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <HeroContent onOpenForm={onOpenForm} />
          <ProjectSlider projects={projects} />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100svh;
          padding-top: 70px;   /* h-[44px] + py-3*2 + border */
        }
        @media (min-width: 1024px) {
          .hero-section {
            padding-top: 140px; /* h-[56px] + py-4*2 + nav-row + border */
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
}
