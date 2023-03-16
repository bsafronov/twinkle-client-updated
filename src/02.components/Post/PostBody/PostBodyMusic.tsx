import AudioItem from "@/02.components/Common/Player/AudioItem";

const PostBodyMusic = () => {
  const audios: AudioProps[] = [
    { title: "Название песни", author: "Исполнитель" },
    { title: "Название песни", author: "Исполнитель" },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {audios.map((item, index) => (
        <AudioItem key={index} audio={item} />
      ))}
    </ul>
  );
};

export default PostBodyMusic;
