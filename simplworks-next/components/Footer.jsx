export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-text">
        &copy; {year} SimplWorks.ai &mdash; All rights reserved.
      </p>
    </footer>
  );
}
