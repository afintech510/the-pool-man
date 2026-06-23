import { Container } from "../ui/container";
import { WaveBackground } from "../ui/wave-bg";

export function FinancingBanner() {
  return (
    <section className="relative bg-pool-950 py-12 overflow-hidden">
      <WaveBackground />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-sun-400 uppercase tracking-wide">
              Financing Available
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              You dream it, we finance it
            </h2>
            <p className="mt-3 text-pool-200">
              Don&apos;t let budget hold you back from the pool you want.
              Financing through HFS makes construction, renovation, liners, and
              heaters affordable with low monthly payments.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-sun-400">2.99%</p>
                <p className="text-sm text-pool-200">Rates as low as</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">$250k</p>
                <p className="text-sm text-pool-200">Loans up to</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">20 yrs</p>
                <p className="text-sm text-pool-200">Terms up to</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">No</p>
                <p className="text-sm text-pool-200">Credit impact to apply</p>
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-pool-200">
              <li>&#10003; Unsecured loans &mdash; no equity needed</li>
              <li>&#10003; Fund all home improvements</li>
            </ul>
            <a
              href="/booking"
              className="mt-4 inline-block w-full text-center rounded-lg bg-sun-500 hover:bg-sun-600 text-white font-semibold py-2.5 px-4 transition-colors"
            >
              Ask About Financing
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
