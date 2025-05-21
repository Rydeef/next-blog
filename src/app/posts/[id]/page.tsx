import CommentsSection from "@/components/comments-section/CommentsSection";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const getData = async (id: string) => {
  console.log(`http://localhost:3000/api/posts/${id}`);

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const SinglePage = async ({ params }: Props) => {
  const { id } = await params;

  const data = await getData(id);

  return (
    <div className="mb-8">
      <div className="w-full h-98 flex">
        <div className="w-2/3 flex flex-col justify-between">
          <h1 className="font-bold text-3xl">{data?.title}</h1>
          <div>
            <div className="flex items-center">
              {data?.user?.image ? (
                <Image
                  src={data?.user?.image}
                  alt="culture"
                  height={48}
                  width={48}
                  className="rounded-full aspect-square object-cover mr-4 border-4"
                />
              ) : null}
              <div className="text-sm text-gray-400">
                <div>{data?.user.name}</div>
                <div>
                  {new Date(data.createdAt).toLocaleDateString()} -{" "}
                  <span className="text-purple-400">
                    {data.catSlug?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          {data?.img ? (
            <Image src={data.img} alt="culture" fill className="rounded-xl" />
          ) : null}
        </div>
      </div>
      <div className="flex mt-16">
        <div className="flex-5">
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <CommentsSection postId={data.id} />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
