export function PartnershipHeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] flex flex-col justify-center py-4xl px-margin-mobile md:px-margin-desktop bg-[#0a110d]">
      <div className="absolute inset-0 z-0">
        <img
          alt="Agricultural fields"
          className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-40"
          src="/hero_section_image.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
      </div>
      <div className="max-w-container-max mx-auto relative z-10 w-full flex flex-col items-start gap-lg">
        <span className="font-executive-caps text-executive-caps text-secondary tracking-widest uppercase bg-white/10 px-sm py-xs rounded-full border border-white/20 inline-block backdrop-blur-md">
          Institutional Coordination
        </span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-white max-w-4xl leading-tight">
          Strategic Institutional <br /><span className="text-secondary">Partnerships</span>
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl">
          Sovereign-scale transformation through disciplined collaboration. We forge enduring alliances with governments, development finance institutions, and global investors to catalyze agricultural enterprise and secure generational prosperity.
        </p>
        <div className="flex flex-col sm:flex-row gap-md mt-md">
          <button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
            <span className="material-symbols-outlined text-[20px]">handshake</span>
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
