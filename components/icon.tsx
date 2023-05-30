import Image from "next/image";

type IconProps = {
  name: string;
  path: string;
}

export default function Icon ({ name, path }: IconProps) {
	return (
  <div className="text-center my-5 mx-5">
    <Image
      src={path}
      alt={`${name} icon`}
      width={100}
      height={100}
      className="relative rounded-full h-32 w-32 object-cover"
      priority
    />
    <p className="text-lg mt-3">{name}</p>
  </div>
	)
};
