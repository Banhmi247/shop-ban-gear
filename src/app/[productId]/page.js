// app/[productId]/page.js
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import Image from "next/image";
import styles from "./page.module.css";

// Dữ liệu sản phẩm (có thể thay bằng API hoặc file dữ liệu riêng)
const gearItems = {
  "ninjutso-sora-v2": {
    name: "Ninjutso Sora v2",
    image: "/image/ninjutso_sora_v2_white_1.png",
    description: "A lightweight gaming mouse with high-precision sensor and customizable RGB.",
    specs: {
      weight: "45g",
      sensor: "Pixart 3395",
      dpi: "Up to 26,000",
      connection: "Wireless 2.4GHz / USB-C",
    },
    price: "$69.99",
  },
  "woothing-60he": {
    name: "Woothing 60he",
    image: "/image/woothing60he.png",
    description: "A compact 60% mechanical keyboard with hot-swappable switches.",
    specs: {
      layout: "60%",
      switches: "Gateron Magnetic",
      connectivity: "Wired USB-C",
      rgb: "Per-key RGB",
    },
    price: "$129.99",
  },
  "hyperx-stinger-core-ii": {
    name: "HyperX Stinger Core II",
    image: "/image/hyperx stinger.webp",
    description: "Comfortable gaming headset with clear audio and noise-canceling mic.",
    specs: {
      driver: "40mm",
      frequency: "20Hz-20kHz",
      mic: "Noise-canceling",
      connection: "3.5mm",
    },
    price: "$39.99",
  },
  "hyperx-quadcast-s": {
    name: "HyperX Quadcast S",
    image: "/image/mic hyperx.png",
    description: "Premium USB microphone with RGB lighting and versatile recording patterns.",
    specs: {
      type: "Condenser",
      patterns: "Stereo, Omni, Cardioid, Bidirectional",
      frequency: "20Hz-20kHz",
      connection: "USB",
    },
    price: "$159.99",
  },
};

// Hàm này cần để Next.js biết các giá trị `productId` có thể có (cho build tĩnh)
export async function generateStaticParams() {
  return Object.keys(gearItems).map((productId) => ({
    productId,
  }));
}

// Chuyển ProductDetail thành async function để await params
export default async function ProductDetail({ params }) {
  // Await params để lấy productId
  const resolvedParams = await params;
  const productId = resolvedParams.productId;
  const product = gearItems[productId];

  if (!product) {
    return (
      <>
        <Header />
        <div className={styles.productDetailContainer}>
          <div>Product not found</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.productDetailContainer}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <a href="/">Home</a> {" > "} <a href="/#gear">Gear</a> {" > "}{" "}
          <span>{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <section className={styles.productMain}>
          <div className={styles.productImageGallery}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className={styles.mainImage}
            />
          </div>

          <div className={styles.productInfo}>
            <h1>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>

            <div className={styles.description}>
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>

            <div className={styles.specifications}>
              <h3>Specifications</h3>
              <ul>
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <button className={styles.addToCart}>Add to Cart</button>
              <button className={styles.buyNow}>Buy Now</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}