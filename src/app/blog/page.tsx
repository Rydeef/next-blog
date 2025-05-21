import CardList from "@/components/card-list/CardList";
import Menu from "@/components/menu/Menu";

interface Props {
  searchParams: { cat: string; page: string };
}

const BlogPage = async ({ searchParams }: Props) => {
  const { cat, page: temp } = await searchParams;

  const page = parseInt(temp) || 1;

  return (
    <div>
      <h1 className="flex justify-center bg-purple-400 py-4 font-bold">
        {cat.toUpperCase()} Blog
      </h1>
      <div className="flex mt-16">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
