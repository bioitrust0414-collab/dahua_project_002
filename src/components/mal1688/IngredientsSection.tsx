const ingredients = [
  {
    icon: "🦴",
    title: "海藻鈣 & 螯合鈣",
    desc: "精選天然紅藻萃取，高生物利用率，滿足基礎發育所需。",
  },
  {
    icon: "💊",
    title: "維生素 D3 + K2-7",
    desc: "增進鈣吸收，幫助骨骼與牙齒的生長發育。活化特殊蛋白質，將鈣質導向正確位置。",
  },
  {
    icon: "⚡",
    title: "粒線體核心",
    desc: "開啟 MCU 細胞內吸收通道，讓鈣離子的細胞主動吞噬率瞬間狂飆。",
  },
];

export function IngredientsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
            吸收重於含量，好吃好吸收最是重要！
          </h2>
          <p className="text-lg text-slate-600">
            吃得再多，沒吸收也是徒勞。我們打破傳統保健品吞嚥困難、充滿藥味的刻板印象。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((item) => (
            <div key={item.title} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.icon} {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
