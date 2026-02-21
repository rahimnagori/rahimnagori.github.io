import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 primary-text">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch with me. I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold primary-text mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 secondary-focus"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold primary-text mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 secondary-focus"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold primary-text mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 secondary-focus resize-none"
              placeholder="Your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-lg secondary-bg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
