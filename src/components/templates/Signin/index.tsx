'use client'
import AppLogo from "@/components/atoms/AppLogo";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Layout from "@/components/templates/Layout";
import SigninFormContainer from "@/containers/SigninFormContainer";
import { useRouter, useSearchParams } from "next/navigation";

const SignIn = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = (searchParams.get("redirect_to") as string) ?? '/'

  const handleSignin = (err?: Error) => {
    if (!err) {
      router.push(redirectTo)
    }
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width={"400px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width={"100%"}>
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>

  );
}

export default SignIn;