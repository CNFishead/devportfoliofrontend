import axios from '@/utils/axios';
import { message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import errorHandler from '@/utils/errorHandler';

/**
 * @description Axio call to update a project
 * @param project The project to be updated
 * @returns The updated project
 */
const contactMeAction = async (formData: any) => {
  const { data } = await axios.post(`/util/contactme`, formData);
  return data;
};

/**
 * @description react-query hook to update a project
 */
export default () => {
  return useMutation((data: any) => contactMeAction(data), {
    onSuccess: (data: any) => {
      message.success('Message sent successfully');
    },
    onError: (error: Error) => {
      errorHandler(error);
    },
  });
};
