export default function Member({
  urlImg,
}: {
  urlImg: string;

}) {
  return (
    <div className="bg-white p-[2px] rounded-full ml-[-10px]">
      <img
        src="https://avatars.githubusercontent.com/u/24969384?s=40&v=4"
        alt="mienbros"
        className="object-cover rounded-full"
      />
    </div>
  );
}
