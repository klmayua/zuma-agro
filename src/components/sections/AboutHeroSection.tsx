export function AboutHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-stack-lg md:py-[180px] px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Aerial view of agricultural landscape symbolizing sovereign transformation"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTwEWqYOXqN8GHY8tD3dojL5ltxQ2t9vP9vW9VUfk3sF-NG3B2_EyRDMF5QADm7GFWfEJKtPn6M5OPbxfL_NbNrSAxwYAJlMYfZRE_WmzZJKZgIYQ8b66MqD8LmBPfRjD9eXpI6FF0FnVgJsJz3JCrVQz84ML1VQyQHWQ-2ppcJq2vHvBxfVGY0CTECJPtgFn0lPVhDFkGv7xKUXUDGjXQo3vQx0vK-Fg2_CRWUEk4BrWfSg9Z_y0BWOJxSFG5Ufbb03W3o0"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto w-full text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-[40px] md:text-[64px] font-display-lg text-white mb-stack-md max-w-4xl leading-tight">
          A Sovereign Asset for National Transformation
        </h1>
        <p className="w-full text-[18px] md:text-[20px] font-body-lg text-white/90 max-w-3xl leading-relaxed">
          Zuma Agro-Allied is a national productivity infrastructure connecting production, aggregation, and industrial processing under a single governance framework. We are engineered to solve Nigeria&apos;s structural food system failures through a disciplined, integrated, and replicable operating architecture.
        </p>
      </div>
    </section>
  );
}
