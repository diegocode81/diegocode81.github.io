export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-quality">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}
