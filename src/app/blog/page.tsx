import CardList from "@/components/card-list/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="flex justify-center bg-purple-400 py-4 font-bold">Style Blog</h1>
      <div className="flex mt-16">
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
};

export default BlogPage;
