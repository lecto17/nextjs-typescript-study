"use client";

import Flex from "@/components/layout/Flex";
import Layout from "../Layout";
import Box from "@/components/layout/Box";
import Text from "@/components/atoms/Text";
import ProductCardCarousel from "@/components/organisms/ProductCardCarousel";
import { Product } from "@/types";
import ProductCard from "@/components/organisms/ProductCard";
import Link from "next/link";

type HomePageProps = {
  bookProducts: Product[];
  clothesProducts: Product[];
  shoesProducts: Product[];
};

const HomePage = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: HomePageProps) => {
  const renderProductCardCarousel = (products: Product[]) => {
    return (
      <ProductCardCarousel>
        {products.map((p: Product, i: number) => (
          <Box paddingLeft={i === 0 ? 0 : 2} key={p.id}>
            <Link href={`/products/${p.id}`}>
              <ProductCard
                variant="small"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                blurDataUrl={p.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
      </ProductCardCarousel>
    );
  };

  return (
    <Layout>
      <Flex padding={2} justifyContent="center" backgroundColor="primary">
        <Flex
          width={{ base: "100%", md: "1040px" }}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box width="100%">
            <Text as="h1" marginBottom={0} color="white" variant="extraLarge">
              Wiki C2C에서
            </Text>
            <Text as="h1" marginTop={0} color="white" variant="extraLarge">
              마음에 드는 아이템을 찾자
            </Text>
          </Box>
          <Box width="100%">
            <Text as="p" color="white" variant="mediumLarge">
              Wiki C2C는 실전적인 Next.js 애플리케이션 개발에서 사용되는 데모
              애플리케이션입니다. 목 서버를 사용하고 있습니다. 소스 코드는
              <Text
                as="a"
                style={{ textDecoration: "underline" }}
                target="_blank"
                href="https://github.com/moseskim/ts-nextbook-app"
                variant="mediumLarge"
                color="white"
              >
                다음
              </Text>
              의 Github에서 다운로드 할 수 있습니다.
            </Text>
            <Text as="p" color="white" variant="mediumLarge">
              이 애플리케이션은 TypeScript/Next.js로 작성되어 있으며, 백엔드의
              목 API는 json-server가 사용되고 있습니다.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex paddingBottom={2} justifyContent="center">
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: "100%", md: "1040px" }}
        >
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              의류
            </Text>
            {renderProductCardCarousel(clothesProducts)}
          </Box>
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              책
            </Text>
            {renderProductCardCarousel(bookProducts)}
          </Box>
          <Box>
            <Text as="h2" variant="large">
              신발
            </Text>
            {renderProductCardCarousel(shoesProducts)}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default HomePage;
