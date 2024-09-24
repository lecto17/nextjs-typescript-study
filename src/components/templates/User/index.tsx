'use client'
import Link from 'next/link'
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem'
import Separator from '@/components/atoms/Separator'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import Layout from '@/components/templates/Layout'
import UserProductCardListContainer from '@/containers/UserProductCardListContainer'
import UserProfileContainer from '@/containers/UserProfileContainer'
import { Product, User } from '@/types'

interface UserDetailProps {
  id: number
  user: User
  products: Product[]
}

const UserDetail = ({ id, user, products }: UserDetailProps) => {
  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1180px">
          <Box marginBottom={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">
                  톱
                </Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
          <Box>
            <Box marginBottom={1}>
              {/*
                사용자 프로파일 컨테이너
                사용자 정보를 표시한다. useUser로 항상 최신 데이터를 얻는다.
              */}
              <UserProfileContainer userId={id} user={user} />
            </Box>
            <Box marginBottom={1}>
              <Separator />
            </Box>
            {/*
              사용자 상품 카드 리스트 컨테이너
              사용자가 서유한 상품 카드 리스트를 표시한다. useSearch로 항상 최신 데이터를 얻는다.
            */}
            <UserProductCardListContainer userId={id} products={products} />
          </Box>
        </Box>
      </Flex>
    </Layout>

  );
}

export default UserDetail;