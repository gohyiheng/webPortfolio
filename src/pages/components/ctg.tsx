export default function ClosingTheGap() {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-4">
        Closing the Gap - Progress Tracker Web Application
      </h2>

      {/* project description */}
      <section>
        <h3 className="text-xl font-semibold mb-2">What It Does</h3>
        <p>
          This web application supports the Australian Government, Indigenous leaders,
          and the public in tracking progress toward the National Agreement on Closing
          the Gap. It focuses on 3 key outcomes:
        </p>
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>Outcome 1: Long and healthy lives</li>
          <li>Outcome 5: Achieving full learning potential</li>
          <li>Outcome 8: Economic participation and development</li>
        </ul>
        <p className="mt-2">
          It visualizes data from the 2016 and 2021 censuses, helping users understand
          progress, view LGA- and state-level insights, and explore raw/proportional
          values and 'the gap' between Indigenous and non-Indigenous populations.
        </p>
      </section>

      {/* What was done  */}
      <section>
        <h3 className="text-xl font-semibold mb-2">What Was Done</h3>
        <p>
          Developed a full-stack web application including UX/UI ideation and implementation with Java, HTML, and CSS.
          Designed and implemented a normalized database model (3NF) with SQLite and Java backend integration.
          Conducted usability testing with participant forms, personas, context scenarios, tasks, and surveys to improve the app based on real user feedback.
        </p>
      </section>

      {/* Tech used */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <ul className="list-disc list-inside pl-4">
          <li>Java - Javalin web server</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL - SQLite/JDBC library</li>
        </ul>
      </section>

      {/* showcase */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Showcase</h3>
        <p>
          Video Demo:&nbsp;
          <a href="https://drive.google.com/file/d/1kmUzmaVhK5Ifna0Uw_fqj-_BH6J9Y8je/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline hover:text-blue-800"> 
          Closing the gap 
          </a>
        </p>
      </section>
    </div>
  );
}