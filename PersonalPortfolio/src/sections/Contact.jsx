import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Feel free to reach out anytime 🚀"
        />

        <div className="grid-12-cols mt-16">
          {/* Left: Contact Info */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 h-full">
              <div className="w-full flex flex-col justify-between gap-8 text-left">

                {/* Contact Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-60">Phone</p>
                    <a
                      href="tel:8483080104"
                      className="text-lg font-medium hover:underline"
                    >
                      848-308-0104
                    </a>
                  </div>

                  <div>
                    <p className="text-sm opacity-60">Email</p>
                    <a
                      href="mailto:madhusuhaas@gmail.com"
                      className="text-lg font-medium hover:underline"
                    >
                      madhusuhaas@gmail.com
                    </a>
                  </div>
                </div>

                <hr className="opacity-20" />

                {/* What I'm Open To */}
                <div>
                  <p className="text-sm uppercase tracking-wide opacity-60 mb-3">
                    What I’m Open To (Internship Roles)
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Software Engineering </li>
                    <li>AI / ML Engineering</li>
                    <li>Data Science / Engineering</li>
                    <li>Backend & Cloud Infrastructure</li>
                    <li>Early-stage startup collaborations</li>
                  </ul>
                </div>

                <hr className="opacity-20" />

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/SuhaasNachannagari"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/Suhaas-Nachannagari"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-sm"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Footer */}
                <p className="text-xs opacity-50 pt-4">
                  Based in Edison, NJ · Open to Remote / Hybrid
                </p>
              </div>
            </div>

          </div>

          {/* Right: Image */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden">
              <img
                src="/images/peaceful-bg.png"
                alt="Peaceful background"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
