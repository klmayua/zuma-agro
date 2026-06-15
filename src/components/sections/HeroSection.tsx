export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex flex-col justify-center py-4xl px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0 bg-[#0a110d]">
        <img 
          src="https://lh3.googleusercontent.com/aida/AP1WRLu1FUnla-mNDGgtVyB3uuWs8oJPoXHSHIvaoCEhLmN2MYbv9uQhQWmpxDsTNt9J1DfMMoUWbuefGef9HwCnAMPv1ioY_0CFucOr_i-e3E8-gPQzXavxc7cABHT6OJ6HSMr6QXh1gHOahrhvvR4GfQ2jLxUa7oRusWSEeufpt2OIHZ0T6-98sr-xTvmg_p7JNBXt4cxRs9aP7b9-Zc4WjbcF8it87fTun0FFdBXK9_DUzTsW53obbGf8dDg" 
          alt="Benue Valley Agricultural Corridor" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto text-left flex flex-col items-start gap-lg">
        <span className="font-executive-caps text-executive-caps text-secondary tracking-widest uppercase bg-white/10 px-sm py-xs rounded-full border border-white/20 inline-block backdrop-blur-md">
          Strategic Initiative
        </span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-white max-w-4xl leading-tight">
          Sovereign Agro-Industrial Transformation Framework
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl">
          Building Nigeria&apos;s national productivity infrastructure for food security and continental competitiveness. Zuma Agro-Allied is designed to solve Nigeria&apos;s structural food system failures through a disciplined, integrated, and replicable operating architecture.
        </p>
        <div className="flex flex-col sm:flex-row gap-md mt-md">
          <a href="/framework" className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
            Explore Framework
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
          <a href="/investors" className="bg-transparent border-2 border-white/30 text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm">
            Download Prospectus
            <span className="material-symbols-outlined text-[20px] ml-xs">download</span>
          </a>
        </div>
      </div>
    </section>
  );
}
