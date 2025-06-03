import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AddAvatar = () => {
  return (
    <Avatar className="w-[36px] h-[36px]">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
};

export default AddAvatar;
