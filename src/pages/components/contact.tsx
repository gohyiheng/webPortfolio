export default function Contact() {
  return (
    <section className="max-w-xl mx-auto p-6 text-center text-gray-800" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>

  {/* contact icons */}
    <div className="flex justify-center items-center space-x-4">
      {/* email */}
      <a
        href="mailto:yiheng29@gmail.com"
        className="text-blue-600 hover:underline"
      >
        <img
          src="/img/icons/gmail.png"
          alt="gmail logo"
          className="w-12 h-12"
        />
      </a>
      {/* linkedin */}
      <a
        href="https://www.linkedin.com/in/yiheng-goh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        <img
          src="/img/icons/linkedin.png"
          alt="linkedin logo"
          className="w-12 h-12"
        />
      </a>
      {/* github */}
      <a
        href="https://github.com/gohyiheng"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        <img
          src="/img/icons/github.png"
          alt="github logo"
          className="w-12 h-12"
        />
      </a>
    </div>
    </section>
  );
}
