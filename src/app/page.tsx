"use client";

const products = [
  {
    id: "staff-schedule",
    icon: "📋",
    title: "护理排班表",
    subtitle: "Excel 模板",
    desc: "自动计算工时、轮班冲突检测、月视图。支持白班/夜班/休息三班轮换，一键生成周报。",
    price: "$12",
    tags: ["Excel", "排班", "最畅销"],
    featured: true,
  },
  {
    id: "health-tracker",
    icon: "🫀",
    title: "老人健康档案",
    subtitle: "Notion 模板",
    desc: "每位老人独立档案：基础病、用药记录、血压/血糖趋势图、过敏史、紧急联系人。支持家属只读共享。",
    price: "$15",
    tags: ["Notion", "健康管理"],
  },
  {
    id: "family-comm",
    icon: "💬",
    title: "家属沟通日报",
    subtitle: "Notion 模板",
    desc: "结构化日报模板：今日活动、饮食、心情、健康指标、明日计划。自动生成分享链接发给家属。",
    price: "$9",
    tags: ["Notion", "家属沟通"],
  },
  {
    id: "activity-calendar",
    icon: "📅",
    title: "月度活动日历",
    subtitle: "Canva + Excel",
    desc: "12 套月历模板，预置 100+ 养老活动创意（手工、音乐、运动、认知训练）。可打印张贴或微信发送。",
    price: "$10",
    tags: ["Canva", "活动策划"],
  },
  {
    id: "med-log",
    icon: "💊",
    title: "药品管理记录",
    subtitle: "Notion + Excel",
    desc: "药品库存追踪、发放记录、过期预警、处方管理。支持多人协作，杜绝漏服错服。",
    price: "$14",
    tags: ["Notion/Excel", "药品安全"],
  },
];

const bundlePrice = 39;
const individualTotal = products.reduce((s, p) => s + Number(p.price.slice(1)), 0);
const savings = individualTotal - bundlePrice;

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center py-16">
        <div className="inline-flex items-center gap-2 bg-warm-100 text-warm-800 px-4 py-1.5 rounded-full text-sm mb-6">
          🏥 专为养老机构设计
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4 leading-tight">
          养老行业的<br className="md:hidden" />
          <span className="text-warm-600">数字模板工具箱</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          5 款专业模板，覆盖排班、健康、沟通、活动、药品 — 从 Excel 到 Notion 到 Canva，即买即用，省下 90% 的文档时间。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-sage-700 hover:bg-sage-800 text-white px-8 py-3 rounded-xl font-semibold transition">
            查看全部模板
          </a>
          <a href="#bundle" className="border-2 border-warm-500 text-warm-700 hover:bg-warm-50 px-8 py-3 rounded-xl font-semibold transition">
            🎁 打包价省 ${savings}
          </a>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="py-12">
        <h2 className="text-2xl font-bold text-sage-800 mb-2">全部模板</h2>
        <p className="text-gray-500 mb-8">点击查看详情和预览</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition cursor-pointer relative ${
                p.featured ? "ring-2 ring-warm-400" : "border-gray-100"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-4 bg-warm-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  ⭐ 最畅销
                </span>
              )}
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-lg text-sage-900">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{p.subtitle}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-sage-800">{p.price}</span>
                <span className="text-sm text-gray-400">单次购买</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section id="bundle" className="py-12">
        <div className="bg-gradient-to-br from-sage-700 to-sage-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <span className="inline-block bg-warm-500 text-white text-sm px-4 py-1 rounded-full mb-4">
            🎁 限时优惠
          </span>
          <h2 className="text-3xl font-bold mb-2">全套 5 款模板</h2>
          <p className="text-sage-200 mb-1">
            原价 <span className="line-through">${individualTotal}</span> → 打包价
          </p>
          <div className="text-5xl font-bold text-warm-300 mb-2">${bundlePrice}</div>
          <p className="text-sage-300 mb-6">一次性购买，永久使用，免费更新</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-left">
            {["📥 即时下载", "🔄 终身更新", "📧 邮件支持", "🇨🇳 中文适配"].map((f) => (
              <div key={f} className="bg-white/10 rounded-xl p-3 text-sm text-center">{f}</div>
            ))}
          </div>
          <a
            href="#"
            className="inline-block bg-warm-500 hover:bg-warm-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            立即购买 — ${bundlePrice}
          </a>
          <p className="text-sage-400 text-xs mt-4">* 模拟模式：支付功能待开通 · 可先邮件预约</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 text-center">
        <p className="text-gray-400 text-sm mb-4">适合以下场景</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["养老院", "护理站", "日间照料中心", "居家养老", "社区养老服务"].map((s) => (
            <span key={s} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8 pb-12 text-center text-sm text-gray-400">
        <p>CareTemplates © 2026 · 模拟项目 · 非真实交易</p>
      </footer>
    </main>
  );
}
