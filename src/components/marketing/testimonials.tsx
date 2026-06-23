const reviews = [
  {
    name: "Stacy R.",
    text: "Had probably the best experience with a contractor ever! Kevin from beginning to end was on top of this project without any delays or excuses! Top tier for me!",
    stars: 5,
  },
  {
    name: "Darren L.",
    text: "We had a great experience with Kevin and his team installing our pool. He brought some really creative design ideas to the table — especially for the pool stairs — and helped us choose an option that looks amazing and fits our space perfectly. What really stood out was how reliable he and his crew were. They showed up when they said they would, stuck to the plan, and followed through on everything promised.",
    stars: 5,
  },
  {
    name: "Emilio C.",
    text: "Just had our pool installed and Kevin and his team are the best around. From beginning to end it was all a pleasure. He had ideas and answered all my stupid questions. Carlos was great too.",
    stars: 5,
  },
  {
    name: "Amanda F.",
    text: "Kevin is a pleasure to work with. He remodeled our entire pool system, and moved our filter to a much better location. We replaced the lining and his team installed an awesome heater — we kept things going until mid October last year! All around great family business!",
    stars: 5,
  },
  {
    name: "Desiree F.",
    text: "Our free form vinyl pool was recently installed, Kevin and his guys did a great job. He is a smaller local company and you get to deal with him personally as an owner during the whole process. Kevin was very responsive to all my calls and texts no matter the time of day.",
    stars: 5,
  },
  {
    name: "Anita V.",
    text: "I used Kevin and his crew to install a new pool. Kevin and his team were great! Kevin was very easy to communicate with. He was very responsive. His prices were right on point. We are very pleased with his workmanship.",
    stars: 5,
  },
  {
    name: "Alyssa S.",
    text: "Kevin and his team have been a pleasure to work with. They have been professional, courteous and neat. They answer all of our questions promptly. Our pool is gorgeous — could not be happier!",
    stars: 5,
  },
  {
    name: "Mike L.",
    text: "Kevin installed and maintained a pool in my first house. I was very impressed with his professionalism and knowledge. I had him install one when I moved. The pool was completed promptly and flawless. I highly recommend The Pool Man.",
    stars: 5,
  },
  {
    name: "Travis K.",
    text: "It was a great experience dealing with Kevin. He is very professional and extremely responsive. I get compliments on my pool constantly. We could not be happier with our pool and our dealings with The Pool Man.",
    stars: 5,
  },
  {
    name: "Paul M.",
    text: "Kevin and his team created my dream pool and spa. Professional, easy to deal with and very reasonable with price. Makes himself available to address any issues or concerns. I would definitely recommend.",
    stars: 5,
  },
  {
    name: "Queenie B.",
    text: "Our pool stopped working and we needed a professional. The Pool Man came right away and diagnosed the problem and had us up and running in just a few days! Would highly recommend using them!",
    stars: 5,
  },
  {
    name: "Army D.",
    text: "My pool liner was replaced, and we needed it sooner than later. He was professional, timely and they did a wonderful job. I recommend 100%. It looks amazing and we are thrilled with the way it turned out!",
    stars: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? "text-sun-400" : "text-slate-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= count} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = reviews.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-slate-900 border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-pool-400 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our customers say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-sm text-slate-400">
              4.4 stars on Google &middot; BBB A+ Rated
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((review) => (
            <div
              key={review.name}
              className="bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col"
            >
              <Stars count={review.stars} />
              <blockquote className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-pool-400 font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <p className="text-sm font-medium text-white">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/6MUw51odqoaFr1Kz8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-pool-400 hover:text-pool-300"
          >
            See all reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export function AllTestimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div
          key={review.name}
          className="bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col"
        >
          <Stars count={review.stars} />
          <blockquote className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
            &ldquo;{review.text}&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-pool-400 font-semibold text-sm">
              {review.name.charAt(0)}
            </div>
            <p className="text-sm font-medium text-white">
              {review.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
