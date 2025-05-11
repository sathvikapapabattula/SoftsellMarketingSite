export default function ContactForm() {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Company" />
          </div>
          <div className="col-md-6">
            <select className="form-select" required>
              <option value="">Select License Type</option>
              <option value="saas">SaaS</option>
              <option value="on-prem">On-Premise</option>
              <option value="custom">Other</option>
            </select>
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
