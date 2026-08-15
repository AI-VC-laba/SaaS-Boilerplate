export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-[#0D1B15] px-6 py-12 text-center">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
    <div className="relative">
      <div className="text-3xl font-bold text-white">{props.title}</div>
      <div className="mx-auto mt-3 max-w-2xl text-lg text-stone-400">
        {props.description}
      </div>
      <div className="mt-8">{props.buttons}</div>
    </div>
  </div>
);
