"use client";

import { useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";

export const useAuthGuard = (): void => {
  const router = useRouter();
  const { authUser, isLoading } = useAuthContext();
  const pathname = usePathname();

  useEffect(() => {
    // 사용자를 얻을 수 없을 때는 로그인 페이지로 리다이렉트
    if (!authUser && !isLoading) {
      const currentPath = pathname;

      router.push(`signin?redirect_to=${currentPath}`);
    }
  }, [router, authUser, isLoading]);
};
