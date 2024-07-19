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
          reflects a diverse and dynamic career path. I had the recent privilege
          of joining a tech startup as hire number 8 and supported its growth to
          a successful acquisition. Working with passionate technical teams
          sparked my interest in software development, and my recent bootcamp
          experience at Maker&apos;s Academy solidified my desire to pursue this
          path.
          <br />
          I&apos;m seeking my first development role, confident that I&apos;ll
          be a risk you&apos;ll never regret taking. What I lack in experience,
          I make up for with attitude - bring on the challenges!
          <br />
          In the meantime, I&apos;m not one to sit still. I&apos;m proactively
          engaging and working with clients to revamp their websites with modern
          web applications.{" "}
        </p>
      </article>
    </>
  );
}

export default Summary;
