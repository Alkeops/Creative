const Boton = ({ className, content, href }) => (
  <a className={`btn ${className}`} href={href}>
    {/* Pensado como un boton en un principio */}
    {content}
  </a>
);

export default Boton;
