import { enableMessageForm } from '$lib/config';

export const submitContactRequest = async ({
  name,
  email,
  message
}: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!enableMessageForm) return null;


  //! Not used
  const URL = '';

  const formData = new FormData();

  formData.set('name', name);
  formData.set('email', email);
  formData.set('message', message);

  const res = await fetch(URL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  });

  return res;
};
