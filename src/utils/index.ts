export const fetcher = async <T>(
  resource: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(resource, init);

  // 왜 try-catch로 감싸주지 않았을까?
  if (!res.ok) {
    const errorRes = await res.json();

    const error = new Error(
      errorRes.message ?? "API 요청 중 에러가 발생했습니다."
    );

    throw error;
  }

  return await res.json();
};
