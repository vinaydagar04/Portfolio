import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>; // ✅ params is a Promise now
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ unwrap properly

  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  }

  return {
    title: "Projects | Vinay Kumar",
    description:
      "Vinay Kumar is a full stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
  };
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params; // ✅ unwrap here also

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
