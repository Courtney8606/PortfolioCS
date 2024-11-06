function Summary() {
  return (
    <>
      <p className="text-4xl mb-8">About me</p>
      <article
        className="desktop:text-xl mobile:text-md"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">
          From Neuroscientist to HR Leader to Software Developer, my journey
          reflects a diverse and dynamic career path. I had the privilege of
          joining a tech startup as hire number 8 and supported its growth to a
          successful acquisition. Working with passionate technical teams
          sparked my interest in software development, and my recent bootcamp
          experience at Maker&apos;s Academy solidified my desire to pursue this
          path.
          <br />
          I&apos;ve recently joined Solirius Consulting as a Test Engineer,
          dedicated to expanding my expertise in languages, tools and processes
          that allow me to contribute effectively to quality assurance
          workflows.
          <br />
          In my spare time I continue to work on projects that spark my interest
          (see below), with a new movie recommendation web app in the works.{" "}
        </p>
      </article>
    </>
  );
}

export default Summary;
