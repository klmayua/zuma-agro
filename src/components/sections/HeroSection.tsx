import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-surface-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/90" />
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-6 py-20 md:py-32">
        <Badge variant="secondary" className="mb-6">
          Sovereign Framework
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 max-w-3xl tracking-tight">
          Sovereign Agro-Industrial Transformation
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
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
