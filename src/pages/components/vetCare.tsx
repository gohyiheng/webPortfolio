export default function VetCare() {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-4">
        VetCare – Online Vet Clinic Platform
      </h2>

      {/* Description */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Overview</h3>
        <p>
          VetCare is a full-featured web platform that streamlines veterinary care for pet owners. Users can schedule appointments,
          manage medical records, request prescriptions, and access educational content — all in one place.
          The app integrates with local clinics and stores, offering real-time availability and pricing.
        </p>
      </section>

      {/* Features */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside pl-4">
          <li>Book, reschedule, or cancel appointments</li>
          <li>View and download medical records securely</li>
          <li>Request prescription refills with delivery options</li>
          <li>Browse a library of pet care resources</li>
        </ul>
      </section>

      {/* Development */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Development</h3>
        <p>
          Built in a Scrum team using Spring Boot, VetCare followed Agile processes across three milestones. We conducted sprint
          planning, retrospectives, and daily standups, managing tasks through GitHub Projects and communicating via Teams.
        </p>
        <p className="mt-2">
          The system includes CI/CD pipelines, containerized deployment via Docker, and a secure backend architecture using
          the MVC pattern.
        </p>
      </section>

      {/* Tech Stack */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <ul className="list-disc list-inside pl-4">
          <li>Java & Spring Boot</li>
          <li>MySQL</li>
          <li>Maven</li>
          <li>JUnit 5</li>
          <li>Docker & Docker Compose</li>
          <li>GitHub Actions</li>
        </ul>
      </section>

      {/* Showcase */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Showcase</h3>
        <p>
          <a
            href="https://drive.google.com/file/d/1EHZNqgNaIbFR42cohI205vCX2Q0ieUz7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Watch the Demo
          </a>
        </p>
      </section>
    </div>
  );
}
