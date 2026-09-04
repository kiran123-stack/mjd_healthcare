import React, { useState } from "react";

const services = [
  "Healthcare SEO",
  "Google Ads",
  "Website Build",
  "Brand Identity",
  "GTM Strategy",
  "Phygital Campaigns",
  "AI-Driven Marketing",
  "Not Sure Yet",
];

const organizationTypes = [
  "Clinic",
  "Hospital",
  "Medical Device Company",
  "Medical Equipment Company",
  "Healthcare Product Company",
  "HealthTech Company",
  "Healthcare Business",
];

const timelines = [
  "Start immediately",
  "Within 30 days",
  "Within 60–90 days",
  "Just exploring",
];

const budgets = [
  "Under ₹30,000",
  "₹30,000 – ₹75,000",
  "₹75,000 – ₹1.5 Lakh",
  "₹1.5 – ₹3 Lakh",
  "₹3 Lakh+",
];

export default function HealthcareCTA() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [type, setType] = useState("Clinic");
  const [timeline, setTimeline] = useState("Start immediately");
  const [budget, setBudget] = useState("Under ₹30,000");
  const [goal, setGoal] = useState("");
  const [notes, setNotes] = useState("");

  const toggleService = (service) => {
    if (service === "Not Sure Yet") {
      setSelectedServices(["Not Sure Yet"]);
      return;
    }

    setSelectedServices((current) => {
      const withoutNotSure = current.filter(
        (item) => item !== "Not Sure Yet"
      );

      if (withoutNotSure.includes(service)) {
        return withoutNotSure.filter((item) => item !== service);
      }

      return [...withoutNotSure, service];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*MJD Healthcare — Strategic Growth Enquiry*
━━━━━━━━━━━━━━━━━━━━━━━━━━
*Required Services:* ${
      selectedServices.length
        ? selectedServices.join(", ")
        : "Not specified"
    }
*Name:* ${name || "Not provided"}
*Organisation:* ${organisation || "Not provided"}
*Type:* ${type}
*Timeline:* ${timeline}
*Monthly Budget:* ${budget}
*Main Goal:* ${goal || "Healthcare growth acceleration"}
*Requirements / Notes:* ${notes || "None provided"}
━━━━━━━━━━━━━━━━━━━━━━━━━━
_Submitted via MJD Healthcare Consultation Portal_
    `.trim();

    const whatsappUrl =
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#06172c]">

      {/* =========================================================
          FULL CTA HERO
      ========================================================== */}

      <section className="relative min-h-screen w-full">

        {/* =======================================================
            BACKGROUND
        ======================================================== */}

        <div className="absolute inset-0 overflow-hidden">

          {/* Main gradient */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_15%_40%,#155a92_0%,#0a2948_35%,#04101f_80%)]
            "
          />

          {/* Blue atmospheric glow */}
          <div
            className="
              absolute
              -left-[180px]
              top-[10%]
              h-[650px]
              w-[650px]
              rounded-full
              bg-[#2685c9]/20
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              right-[-200px]
              bottom-[-180px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-[#0b70b9]/20
              blur-[150px]
            "
          />

          {/* =====================================================
              MEDICAL IMAGE AREA

              Replace this URL with your own healthcare image
              if you have a local asset.
          ====================================================== */}

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[45%]
              opacity-[0.20]
              mix-blend-screen
            "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=85')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 55%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 55%, black 100%)",
            }}
          />

          {/* Image dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#06172c]
              via-[#06172c]/90
              to-[#06172c]/30
            "
          />

         
        </div>

       

        {/* =========================================================
            CONTENT
        ========================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            w-full
            max-w-[1500px]
            items-center
            px-4
            py-8
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >

          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-10
              xl:grid-cols-[0.92fr_1.08fr]
              xl:gap-16
            "
          >

            {/* =====================================================
                LEFT SIDE
            ====================================================== */}

            <div
              className="
                relative
                flex
                flex-col
                justify-center
                px-1
                py-8
                sm:px-4
                lg:py-12
                xl:pl-8
              "
            >

              {/* Eyebrow */}

              <div className="mb-5 flex items-center gap-3">

                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#007BFF] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse" />
                  <span>LET'S DISCUSS YOUR GROWTH</span>
                </div>

              </div>

              {/* Main heading */}

              <h2 className="max-w-[650px] text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.28] sm:leading-[1.3] tracking-tight">
                Find Your Next{' '}
                <br className="hidden sm:inline" />
                <span className="text-[#007BFF]">Healthcare Opportunity.</span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-[520px]
                  text-[13px]
                  leading-6
                  text-white/60
                  sm:text-[14px]
                  sm:leading-7
                "
              >
                Tell us a little about your business. We'll understand
                your goals and share how MJD Healthcare can help you
                create meaningful growth, market access and demand.
              </p>

              {/* ===================================================
                  THREE BENEFITS
              ==================================================== */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-3
                  lg:grid-cols-1
                  xl:grid-cols-3
                "
              >

                {/* Benefit */}

                <div className="flex gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.07]
                      text-[#66b9f6]
                    "
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      groups
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      Expert Consultation
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/40">
                      Speak with our healthcare growth team.
                    </p>
                  </div>

                </div>

                {/* Benefit */}

                <div className="flex gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.07]
                      text-[#66b9f6]
                    "
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      insights
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      Tailored Recommendations
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/40">
                      Built around your market and goals.
                    </p>
                  </div>

                </div>

                {/* Benefit */}

                <div className="flex gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.07]
                      text-[#66b9f6]
                    "
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      lock
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      No Obligation
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/40">
                      Just a conversation about possibilities.
                    </p>
                  </div>

                </div>

              </div>

              {/* Strategy footer */}

              <div
                className="
                  mt-10
                  hidden
                  items-center
                  gap-3
                  lg:flex
                "
              >

                <div className="h-px w-8 bg-white/20" />

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Strategy
                </span>

                <span className="text-white/15">/</span>

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Demand
                </span>

                <span className="text-white/15">/</span>

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Access
                </span>

                <span className="text-white/15">/</span>

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Growth
                </span>

              </div>

            </div>

            {/* =====================================================
                RIGHT SIDE — FORM
            ====================================================== */}

            <div
              className="
                relative
                w-full
                lg:pr-3
                xl:pr-8
              "
            >

              {/* Outer glass glow */}

              <div
                className="
                  absolute
                  -inset-2
                  rounded-[27px]
                  bg-[#5baef2]/10
                  blur-xl
                "
              />

              {/* FORM CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/50
                  bg-white/[0.94]
                  shadow-[0_30px_90px_rgba(0,0,0,0.30)]
                  backdrop-blur-2xl
                "
              >

                {/* Top glass shine */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    h-20
                    bg-gradient-to-b
                    from-white
                    to-transparent
                    opacity-70
                  "
                />

                <div
                  className="
                    relative
                    p-5
                    sm:p-6
                    lg:p-7
                    xl:p-8
                  "
                >

                  {/* =================================================
                      FORM HEADER
                  ================================================== */}

                  <div className="mb-5">

                    <div className="flex items-center gap-2">

                      <div
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-[#e5f2ff]
                          text-[#2680cc]
                        "
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          chat
                        </span>
                      </div>

                      <span
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.25em]
                          text-[#448ac5]
                        "
                      >
                        Get in touch
                      </span>

                    </div>

                    <h2
                      className="
                        mt-2
                        text-[19px]
                        font-extrabold
                        leading-tight
                        tracking-[-0.03em]
                        text-[#10243c]
                        sm:text-[22px]
                      "
                    >
                      Tell Us About Your Healthcare Growth Opportunity
                    </h2>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        leading-4
                        text-[#7c8794]
                        sm:text-[10px]
                      "
                    >
                      Fill in a few details and we'll reach out to discuss
                      the right next steps.
                    </p>

                  </div>

                  {/* =================================================
                      SERVICES
                  ================================================== */}

                  <div>

                    <div className="mb-2">

                      <h3
                        className="
                          text-[10px]
                          font-bold
                          text-[#26384d]
                        "
                      >
                        What do you need?
                      </h3>

                      <p className="mt-0.5 text-[8px] text-[#8b95a1]">
                        Pick one or more
                      </p>

                    </div>

                    <div className="flex flex-wrap gap-1.5">

                      {services.map((service) => {
                        const selected =
                          selectedServices.includes(service);

                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() =>
                              toggleService(service)
                            }
                            className={`
                              rounded-full
                              border
                              px-2.5
                              py-[6px]
                              text-[8px]
                              font-semibold
                              transition-all
                              duration-200
                              sm:px-3
                              sm:text-[9px]

                              ${
                                selected
                                  ? `
                                    border-[#2878bc]
                                    bg-[#e7f2fc]
                                    text-[#1763a5]
                                  `
                                  : `
                                    border-[#d6dce3]
                                    bg-white
                                    text-[#45515f]
                                    hover:border-[#8eb5d6]
                                    hover:bg-[#f7fbff]
                                  `
                              }
                            `}
                          >
                            {service}

                            {selected && (
                              <span className="ml-1">
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      })}

                    </div>

                  </div>

                  {/* =================================================
                      FORM FIELDS
                  ================================================== */}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-3"
                  >

                    {/* ROW 1 */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-2.5
                        sm:grid-cols-3
                      "
                    >

                      {/* Name */}

                      <div>

                        <label
                          className="
                            mb-1
                            block
                            text-[8px]
                            font-semibold
                            text-[#3e4c5c]
                          "
                        >
                          Your name
                        </label>

                        <input
                          type="text"
                          value={name}
                          onChange={(e) =>
                            setName(e.target.value)
                          }
                          placeholder="Dr. Anjali Verma"
                          className="
                            h-9
                            w-full
                            rounded-md
                            border
                            border-[#d9dee5]
                            bg-white
                            px-2.5
                            text-[9px]
                            text-[#1e3044]
                            outline-none
                            placeholder:text-[#a2abb5]
                            transition
                            focus:border-[#4388c6]
                            focus:ring-2
                            focus:ring-[#4388c6]/10
                          "
                        />

                      </div>

                      {/* Organisation */}

                      <div>

                        <label
                          className="
                            mb-1
                            block
                            text-[8px]
                            font-semibold
                            text-[#3e4c5c]
                          "
                        >
                          Organisation
                        </label>

                        <input
                          type="text"
                          value={organisation}
                          onChange={(e) =>
                            setOrganisation(e.target.value)
                          }
                          placeholder="Sunrise Multispeciality"
                          className="
                            h-9
                            w-full
                            rounded-md
                            border
                            border-[#d9dee5]
                            bg-white
                            px-2.5
                            text-[9px]
                            text-[#1e3044]
                            outline-none
                            placeholder:text-[#a2abb5]
                            transition
                            focus:border-[#4388c6]
                            focus:ring-2
                            focus:ring-[#4388c6]/10
                          "
                        />

                      </div>

                      {/* Type */}

                      <div>

                        <label
                          className="
                            mb-1
                            block
                            text-[8px]
                            font-semibold
                            text-[#3e4c5c]
                          "
                        >
                          Type
                        </label>

                        <select
                          value={type}
                          onChange={(e) =>
                            setType(e.target.value)
                          }
                          className="
                            h-9
                            w-full
                            rounded-md
                            border
                            border-[#d9dee5]
                            bg-white
                            px-2
                            text-[9px]
                            text-[#1e3044]
                            outline-none
                            transition
                            focus:border-[#4388c6]
                            focus:ring-2
                            focus:ring-[#4388c6]/10
                          "
                        >
                          {organizationTypes.map((item) => (
                            <option key={item}>
                              {item}
                            </option>
                          ))}
                        </select>

                      </div>

                    </div>

                    {/* ROW 2 */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-2.5
                        sm:grid-cols-3
                      "
                    >

                      {/* Timeline */}

                      <div>

                        <label
                          className="
                            mb-1
                            block
                            text-[8px]
                            font-semibold
                            text-[#3e4c5c]
                          "
                        >
                          Timeline
                        </label>

                        <select
                          value={timeline}
                          onChange={(e) =>
                            setTimeline(e.target.value)
                          }
                          className="
                            h-9
                            w-full
                            rounded-md
                            border
                            border-[#d9dee5]
                            bg-white
                            px-2
                            text-[9px]
                            text-[#1e3044]
                            outline-none
                            focus:border-[#4388c6]
                            focus:ring-2
                            focus:ring-[#4388c6]/10
                          "
                        >
                          {timelines.map((item) => (
                            <option key={item}>
                              {item}
                            </option>
                          ))}
                        </select>

                      </div>

                      {/* Budget */}

                      <div>

                        <label
                          className="
                            mb-1
                            block
                            text-[8px]
                            font-semibold
                            text-[#3e4c5c]
                          "
                        >
                          Monthly budget
                        </label>

                        <select
                          value={budget}
                          onChange={(e) =>
                            setBudget(e.target.value)
                          }
                          className="
                            h-9
                            w-full
                            rounded-md
                            border
                            border-[#d9dee5]
                            bg-white
                            px-2
                            text-[9px]
                            text-[#1e3044]
                            outline-none
                            focus:border-[#4388c6]
                            focus:ring-2
                            focus:ring-[#4388c6]/10
                          "
                        >
                          {budgets.map((item) => (
                            <option key={item}>
                              {item}
                            </option>
                          ))}
                        </select>

                      </div>

                      {/* Goal */}

                      <div>

                        <label
                          className="
                            mb-1
                            block
                            text-[8px]
                            font-semibold
                            text-[#3e4c5c]
                          "
                        >
                          Main goal
                        </label>

                        <input
                          type="text"
                          value={goal}
                          onChange={(e) =>
                            setGoal(e.target.value)
                          }
                          placeholder="More OPD bookings from..."
                          className="
                            h-9
                            w-full
                            rounded-md
                            border
                            border-[#d9dee5]
                            bg-white
                            px-2.5
                            text-[9px]
                            text-[#1e3044]
                            outline-none
                            placeholder:text-[#a2abb5]
                            focus:border-[#4388c6]
                            focus:ring-2
                            focus:ring-[#4388c6]/10
                          "
                        />

                      </div>

                    </div>

                    {/* =================================================
                        PROJECT DETAILS / REQUIREMENTS (TEXTAREA)
                    ================================================== */}

                    <div>

                      <label
                        className="
                          mb-1
                          block
                          text-[8px]
                          font-semibold
                          text-[#3e4c5c]
                        "
                      >
                        Project context &amp; key requirements
                      </label>

                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Brief context on your medical product, target hospitals, or timeline..."
                        className="
                          w-full
                          rounded-md
                          border
                          border-[#d9dee5]
                          bg-white
                          p-2.5
                          text-[9px]
                          text-[#1e3044]
                          outline-none
                          transition
                          placeholder:text-[#a2abb5]
                          focus:border-[#4388c6]
                          focus:ring-2
                          focus:ring-[#4388c6]/10
                          resize-none
                        "
                      />

                    </div>

                    {/* =================================================
                        WHATSAPP CTA
                    ================================================== */}

                    <button
                      type="submit"
                      className="
                        group
                        flex
                        h-10
                        w-full
                        items-center
                        justify-center
                        gap-1.5
                        rounded-md
                        bg-[#1267b7]
                        text-[9px]
                        font-bold
                        text-white
                        shadow-[0_7px_18px_rgba(18,103,183,0.22)]
                        transition-all
                        duration-200
                        hover:-translate-y-[1px]
                        hover:bg-[#0f5da7]
                        hover:shadow-[0_10px_25px_rgba(18,103,183,0.30)]
                        active:translate-y-0
                      "
                    >

                      {/* WhatsApp */}

                      <svg
                        viewBox="0 0 24 24"
                        className="h-[13px] w-[13px] fill-current"
                      >
                        <path d="M20.52 3.449A11.89 11.89 0 0012.03 0C5.47 0 .13 5.34.13 11.9c0 2.1.55 4.15 1.59 5.96L.03 24l6.28-1.65a11.88 11.88 0 005.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9a11.86 11.86 0 00-3.42-8.46zM12.04 21.8h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.88 9.88 0 01-1.52-5.28C2.14 6.45 6.58 2 12.04 2c2.65 0 5.14 1.03 7.01 2.9a9.85 9.85 0 012.91 7c0 5.46-4.45 9.9-9.92 9.9zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
                      </svg>

                      <span>
                        Send this on WhatsApp
                      </span>

                      <span
                        className="
                          material-symbols-outlined
                          text-[13px]
                          transition-transform
                          group-hover:translate-x-0.5
                        "
                      >
                        arrow_forward
                      </span>

                    </button>

                  </form>

                  {/* Privacy */}

                  <div
                    className="
                      mt-2.5
                      flex
                      items-center
                      justify-center
                      gap-1
                      text-center
                      text-[7px]
                      text-[#9aa3ad]
                    "
                  >
                    <span className="material-symbols-outlined text-[9px]">
                      lock
                    </span>

                    Your information is private and will only be used
                    to understand your requirements.
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM DECORATIVE LABEL
        ========================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-2
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-white/20
            lg:flex
          "
        >
          MJD Healthcare
          <span className="text-white/10">•</span>
          Healthcare Growth & Market Access
        </div>

      </section>
    </main>
  );
}