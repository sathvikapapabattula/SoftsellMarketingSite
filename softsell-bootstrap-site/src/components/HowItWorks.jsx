export default function HowItWorks() {
  const steps = [
    { title: "Upload License", desc: "Submit your license details easily." },
    { title: "Get Valuation", desc: "We evaluate and give you a price instantly." },
    { title: "Get Paid", desc: "Instant payout on successful transfer." },
  ]

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">How It Works</h2>
        <div className="row">
          {steps.map((step, idx) => (
            <div key={idx} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
