import CardList from "@/components/card-list/CardList";
import CategoryList from "@/components/category-list/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
