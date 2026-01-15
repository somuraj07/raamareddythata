import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f54e02]/10 text-gray-900">
      {/* Spacer for mobile navbar */}
      <div className="h-10 md:hidden"></div>
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-8 md:pb-16">

        {/* Header */}
        <div className="text-center mb-12 pt-4 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f54e02] tracking-tight">
            About Rami Reddy Thatha
          </h1>
        
        </div>

        {/* Mobile: All items in one column */}
        <div className="md:hidden space-y-6">
          {/* Photo */}
          <div className="flex justify-center">
            <Image
              src="/about.jpeg"
              alt="Sri Avadhutha Rami Reddy Thatha"
              width={400}
              height={400}
              className="rounded-xl shadow-xl border border-[#f54e02]/30"
            />
          </div>

          {/* All 8 items in one list */}
          <div className="space-y-6 text-lg leading-relaxed">
            <ul className="list-disc pl-5 space-y-4 marker:text-[#f54e02]">
              <li>
                Sri Avadhutha Rami Reddy Thatha was born to Hanumanth Reddy and
                Eshwaramma in 1949 on Shravan Bahula Ashtami (Sri Krishna Janmashtami),
                at Anugonda village, Kurnool District, Andhra Pradesh.
              </li>

              <li>
                Like Lord Krishna, he exhibited divine miracles from childhood.
                At age 13, Tatha moved from Anugonda to Kallur, 3km from Kurnool.
              </li>

              <li>
                In the Kurnool region, revered personalities are lovingly called
                Nayana or Tatha. Devotees accepted him as the head of their family,
                which is why he came to be known as Tatha.
              </li>

              <li>
                An Avadhuta is beyond caste, creed, worldly concerns, ego, or pleasure.
                They remain in a state of pure awareness, free from birth and death,
                virtue and sin, form and limitations.
              </li>

              <li>
                Avadhutas possess boundless compassion, divine knowledge, and the ability
                to guide devotees toward renunciation, purity, and salvation.
                Sri Ramavadhuta is believed to be an incarnation of Lord Dattatreya.
              </li>

              <li>
                Blessed is the soil of Kallur, which received his holy presence.
                Tatha cared for devotees with immense love, destroyed their karmic burdens,
                uplifted lives, and fulfilled righteous desires.
              </li>

              <li>
                On 15 January 1993, Tatha took Mahasamidhi. His physical body left the world,
                but his eternal divine presence continues to guide and bless devotees.
              </li>

              <li>
                After Mahasamidhi, a Sansthan was established to continue daily poojas,
                spiritual activities, and social service in his name.
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop: Image Left, Content Right */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT — PHOTO */}
          <div className="flex justify-center">
            <Image
              src="/about.jpeg"
              alt="Sri Avadhutha Rami Reddy Thatha"
              width={400}
              height={400}
              className="rounded-xl shadow-xl border border-[#f54e02]/30"
            />
          </div>

          {/* RIGHT — CONTENT (First 5 items) */}
          <div className="space-y-6 text-lg leading-relaxed">
            <ul className="list-disc pl-5 space-y-4 marker:text-[#f54e02]">
              <li>
                Sri Avadhutha Rami Reddy Thatha was born to Hanumanth Reddy and
                Eshwaramma in 1949 on Shravan Bahula Ashtami (Sri Krishna Janmashtami),
                at Anugonda village, Kurnool District, Andhra Pradesh.
              </li>

              <li>
                Like Lord Krishna, he exhibited divine miracles from childhood.
                At age 13, Tatha moved from Anugonda to Kallur, 3km from Kurnool.
              </li>

              <li>
                In the Kurnool region, revered personalities are lovingly called
                Nayana or Tatha. Devotees accepted him as the head of their family,
                which is why he came to be known as Tatha.
              </li>

              <li>
                An Avadhuta is beyond caste, creed, worldly concerns, ego, or pleasure.
                They remain in a state of pure awareness, free from birth and death,
                virtue and sin, form and limitations.
              </li>

              <li>
                Avadhutas possess boundless compassion, divine knowledge, and the ability
                to guide devotees toward renunciation, purity, and salvation.
                Sri Ramavadhuta is believed to be an incarnation of Lord Dattatreya.
              </li>
            </ul>
          </div>
        </div>

        {/* Last 3 items - below the grid, starting below photo, full width on desktop */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-start mt-8">
          <div className="col-span-2 space-y-6 text-lg leading-relaxed">
            <ul className="list-disc pl-5 space-y-4 marker:text-[#f54e02]">
              <li>
                Blessed is the soil of Kallur, which received his holy presence.
                Tatha cared for devotees with immense love, destroyed their karmic burdens,
                uplifted lives, and fulfilled righteous desires.
              </li>

              <li>
                On 15 January 1993, Tatha took Mahasamidhi. His physical body left the world,
                but his eternal divine presence continues to guide and bless devotees.
              </li>

              <li>
                After Mahasamidhi, a Sansthan was established to continue daily poojas,
                spiritual activities, and social service in his name.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
