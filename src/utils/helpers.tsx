import type { IFormData } from '@/types/auth-form-types';

export const goToHomePage = () => {
  window.location.href = '/home';
};

export const handleChangeForm = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>
) => {
  const { id, value } = e.target;
  setFormData((prev: IFormData) => ({
    ...prev,
    [id]: value,
  }));
};
