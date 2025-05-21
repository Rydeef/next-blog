import CardList from "@/components/card-list/CardList";
import CategoryList from "@/components/category-list/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  const { page: temp } = await searchParams;

  const page = parseInt(temp) || 1

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex mt-16">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
