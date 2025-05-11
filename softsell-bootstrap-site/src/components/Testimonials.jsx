export default function Testimonials() {
  const reviews = [
    {
      name: "Jane Doe",
      role: "IT Manager, TechCorp",
      text: "SoftSell helped us turn unused software into revenue in days. Impressive speed and support!",
    },
    {
      name: "John Smith",
      role: "Founder, Startify",
      text: "A smooth and reliable service from start to finish. Highly recommended!",
    },
  ]

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">What Our Clients Say</h2>
        <div className="row">
          {reviews.map((r, i) => (
            <div key={i} className="col-md-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <blockquote className="blockquote">
                    <p>{r.text}</p>
                  </blockquote>
                  <footer className="blockquote-footer mt-3">
                    {r.name}, <cite title={r.role}>{r.role}</cite>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
