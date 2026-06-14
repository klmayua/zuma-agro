import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-[#0a110d] text-white overflow-hidden min-h-[700px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/90" />
      <div className="relative max-w-[1280px] mx-auto px-16 md:px-8 py-24 md:py-32 flex flex-col justify-center min-h-[700px]">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-4 py-2 w-fit mb-8">
          <div className="w-2 h-2 bg-secondary rounded-full" />
          <span className="text-sm font-semibold tracking-wider uppercase">Sovereign Framework</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-display-lg font-bold leading-tight mb-6 max-w-3xl tracking-tight">
          Sovereign Agro-Industrial Transformation
        </h1>
        <p className="text-body-lg text-white/80 mb-10 max-w-2xl">
          Building Nigeria&apos;s premier agro-industrial infrastructure through institutional partnerships and data-driven operations.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/framework">
            Explore Framework
          </Button>
          <Button variant="secondary" href="/investors">
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}
