export default function Loading() {
  return (
    <main className="inner-page loading-page" aria-busy="true" aria-label="Loading page">
      <section className="page-hero">
        <div className="page-width">
          <div className="skel-line skel-eyebrow" />
          <div className="skel-line skel-title" />
          <div className="skel-line skel-desc" />
        </div>
      </section>
      <section className="page-body">
        <div className="page-width">
          <div className="skel-block" />
          <div className="skel-block short" />
        </div>
      </section>
    </main>
  );
}
