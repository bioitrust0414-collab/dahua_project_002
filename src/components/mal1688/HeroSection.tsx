export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-100">
      <div className="absolute top-1/4 left-1/2 mal1688-glow w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs text-emerald-700 font-bold tracking-wide">
              👶 兒童成長發育期
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
              補鈣不長肉？
              <br />
              <span className="text-emerald-500">
                不是缺原料，
                <br />
                是因為孩子的粒線體沒點火！
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              科學界重大發現：粒線體才是控制成骨細胞主動吸收鈣的重要核心通道！
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors">
                進入智能行銷驗證中心
              </button>
              <button className="px-8 py-3 bg-white border-2 border-slate-300 text-slate-900 font-bold rounded-lg hover:border-emerald-500 transition-colors">
                細胞成長實驗室
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
