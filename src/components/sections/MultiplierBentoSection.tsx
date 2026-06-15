export function MultiplierBentoSection() {
  return (
    <section className="bg-primary py-stack-lg md:py-[100px] px-margin-mobile md:px-margin-desktop text-on-primary">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-headline-md text-secondary mb-4">10+ Multiplier Effects</h2>
            <p className="font-body-lg text-body-lg text-surface-dim">
              Our localized production models trigger compounding economic benefits across the national value chain.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity shadow-lg self-start md:self-end">
            <span className="material-symbols-outlined">bar_chart</span>
            View Sustainability Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-primary-container p-stack-md rounded border border-on-primary-fixed-variant/30 flex flex-col justify-between group hover:border-secondary/50 transition-colors">
            <div className="mb-8">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">factory</span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">Rural Industrialisation</h3>
              <p className="font-body-md text-body-md text-surface-dim max-w-lg">
                Transforming agrarian communities into agro-processing hubs. We establish localized infrastructure that retains value at the source, reducing post-harvest losses and driving regional GDP growth.
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-on-primary-fixed-variant/50 pt-4 mt-auto">
              <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">Impact Vector 01</span>
              <span className="material-symbols-outlined text-surface-dim group-hover:text-secondary transition-colors">arrow_outward</span>
            </div>
          </div>
          <div className="bg-primary-container p-stack-md rounded border border-on-primary-fixed-variant/30 flex flex-col justify-between group hover:border-secondary/50 transition-colors">
            <div className="mb-8">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">currency_exchange</span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">FX Stabilisation</h3>
              <p className="font-body-md text-body-md text-surface-dim">
                Direct substitution of imported commodities with domestically produced equivalents, conserving vital foreign exchange reserves.
              </p>
            </div>
            <div className="mt-auto">
              <span className="font-headline-lg text-headline-lg text-secondary block mb-2">-$2B</span>
              <span className="font-label-sm text-label-sm text-surface-dim uppercase">Targeted Import Reduction</span>
            </div>
          </div>
          <div className="bg-primary-container p-stack-md rounded border border-on-primary-fixed-variant/30 flex flex-col justify-between group hover:border-secondary/50 transition-colors">
            <div className="mb-8">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">groups</span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">Youth Employment</h3>
              <p className="font-body-md text-body-md text-surface-dim">
                Creating formalized, high-skill roles in modern agronomy, logistics, and agribusiness management.
              </p>
            </div>
            <div className="mt-auto">
              <span className="font-headline-lg text-headline-lg text-secondary block mb-2">50k+</span>
              <span className="font-label-sm text-label-sm text-surface-dim uppercase">Direct Jobs Projected</span>
            </div>
          </div>
          <div className="md:col-span-2 relative min-h-[300px] rounded overflow-hidden border border-on-primary-fixed-variant/30">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWREz9DewjetTuroZ_YdGpvAhXvv9ZXTwlwmmOUXurbcX05b3Wy3_sYVEiotcv74mxLZjng79OrRE6DKDL1O05g81FitUiGeVuf4YSRT85e7CRl0LRuGHFRryUWvJYggNHu8fThLnHgwWxRxrjC-1TGudJ4W82y3_J1TTbNkJVaXHESOWrwE6ul1uD1B-1wFuvEmmnInD09yL1IIRcVTw4Lgc4KEqCatMJ466UsyO7SZyzvNM0GVD6XNBd1Gap3CFlcG3Upc2k7vE')" }} />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 p-stack-md w-full bg-gradient-to-t from-primary to-transparent">
              <h3 className="font-headline-md text-headline-md text-secondary">Scale &amp; Precision</h3>
              <p className="font-body-md text-body-md text-surface-dim mt-2">Institutional-grade execution across the agricultural belt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
