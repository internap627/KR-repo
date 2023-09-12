import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#1e4f50",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0,
      }}
    >
      <div>
        {/* © and the year */}
        &copy; {currentYear} Kwasi J Robinson
      </div>
      <div className="socials">
        {/* Social media icons */}
        <a
          href="https://www.facebook.com/kwasirobinsonTPRC?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="fb-logo.png" alt="Facebook" />
        </a>
        <a
          href="https://twitter.com/KwasiJRobinson?t=JV0kPPWD7wDX6FulAl6aOQ&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="twitter-logo.png" alt="Twitter" />
        </a>
        <a
          href="https://instagram.com/kwasijrobinson?igshid=MmU2YjMzNjRlOQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="insta-logo.png" alt="Instagram" />
        </a>
        {/* Add more social media links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
