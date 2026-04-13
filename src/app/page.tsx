import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Vinay</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> currently building
        <Link
          className="mx-2 text-sky-600"
          href={"https://mockify-puce.vercel.app/"}
        >
          Mockify
        </Link>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have been building scalable web apps that are performance optimised
<<<<<<< HEAD
        and stunning design for <Highlight>more than 1 year now</Highlight>
=======
        and stunning design for <Highlight>more than 1 years now</Highlight>
>>>>>>> 6b9947da3c4dd4a08d4bfde66a219cbf69c637fc
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
