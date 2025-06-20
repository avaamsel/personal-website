export default function Footer() {
  return (
    <footer className="text-center mt-4 text-sm font-semibold bg-primary-100 text-primary-900">
      {/* <p className = "text-center text-xl font-bold mt-4" style = {{ color: "var(--navbar-background)" }}> diversify your grunge palate! </p> */}
      <ul className="flex justify-center gap-6 mt-2">
        <li>
        {/* <a href="https://open.spotify.com/user/lucv4ivndn8k51tb4wsv7augj" target="_blank" rel="noopener noreferrer">
            spotify
          </a> */}
        </li>
        <li>
        <a href="https://github.com/avaamsel" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/nunesava" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </li>
      </ul>
      <p className = "flex justify-center mt-2 pb-4"> Ava Nunes  &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}