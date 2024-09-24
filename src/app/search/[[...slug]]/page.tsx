import SearchHome from "@/components/templates/Search";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <SearchHome />
    </Suspense>
  );
};

export default SearchPage;
