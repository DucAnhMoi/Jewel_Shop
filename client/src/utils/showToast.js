import { v4 as uuidv4 } from 'uuid';
import { addToast, deleteToast } from 'src/redux/features/toastSlice';

export const showToast = (
  type = 'success',
  title = 'title',
  message = 'message',
  duration = 3000,
  dispatch,
) => {
  let action = { id: uuidv4(), type, title, message };
  dispatch(addToast(action));
  setTimeout(() => dispatch(deleteToast(action.id)), duration);
};
