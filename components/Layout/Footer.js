import Image from "next/image";
import FooterContainer from "./FooterContainer";

function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center grow">
        Powered by{" "}
        <span className="h-4 ml-2">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </FooterContainer>
  );
}

export default Footer;
