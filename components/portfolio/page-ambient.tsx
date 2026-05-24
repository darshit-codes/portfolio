export function PageAmbient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -top-[20%] left-[10%] size-[400px] rounded-full bg-[#8B5CF6]/8 blur-[80px]" />
      <div className="absolute top-[45%] -right-[10%] size-[320px] rounded-full bg-[#8B5CF6]/5 blur-[70px]" />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
