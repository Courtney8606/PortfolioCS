import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Python",
        600,
        "Flask",
        600,
        "Javascript",
        600,
        "React.js",
        600,
        "PostgreSQL",
        600,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "5px",
        fontSize: "1em",
        textAlign: "left",
        color: "#84ffff",
        fontWeight: "bold",
        display: "inline-block",
        width: "28.5%",
      }}
      repeat={1}
    />
  );
}

export default Typing;
