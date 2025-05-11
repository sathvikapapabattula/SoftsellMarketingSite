export default function WhyChooseUs() {
  const features = [
    "Instant license valuation",
    "Secure and verified transactions",
    "Dedicated customer support",
    "Highest resale value guaranteed",
  ]

  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4">Why Choose Us</h2>
        <div className="row">
          {features.map((item, i) => (
            <div key={i} className="col-md-6 mb-3">
              <div className="border p-4 rounded h-100">
                <h5>{item}</h5>
                <p className="text-muted">We ensure a seamless and reliable process.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
