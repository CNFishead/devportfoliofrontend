import axios from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';

export const postConactForm = async (data: any) => {
  const { data: response } = await axios.post('/contact', data);
  return response;
};

export default (options?: {
  // onSuccess is a callback function that will be called on success, to do something with the data
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}) => {
  const mutation = useMutation(postConactForm, {
    onSuccess: (data) => {
      message.success('Message Sent! looking forward to connecting with you!');
    },
    onError: (error) => {
      message.error('Something went wrong, please try again later');
    },
  });

  return mutation;
};
