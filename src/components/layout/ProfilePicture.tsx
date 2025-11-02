import Image from "next/image";

interface ProfileInfo {
  image: string;
  name: string;
}

const ProfilePicture = ({ image, name }: ProfileInfo) => {
  return (
    <>
      <Image
        src={`/${image}`}
        alt="Imagem do Cliente"
        width={250}
        height={250}
        quality={100}
        className="m-5 rounded-[50%] "
      ></Image>
      <h2 className="font-bold text-[40px] py-5">{name}</h2>
    </>
  );
};

export default ProfilePicture;
