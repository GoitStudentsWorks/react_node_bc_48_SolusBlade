import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import InputField from 'shared/components/InputField/InputField';
import * as yup from 'yup';
import css from './ProfileModal.module.scss';
import { useDispatch } from 'react-redux';
import { updateUser, updateAvatar } from 'redux/auth/authOperations';
import sprite from '../../../assets/icons/icons.svg';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(64, 'Username must be less than or equal to 64 characters')
    .required('Username is a required field'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .min(3, 'Email must be at least 3 characters')
    .max(64, 'Email must be less than or equal to 64 characters')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be less than or equal to 64 characters')
    .required('Password is a required field'),
});

const InitalVelues = {
  name: '',
  email: '',
  password: '',
};

export const ProfileModal = ({ modalHandler, avatar, userAvatar }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (image) {
      const formData = new FormData();
      formData.append('avatar', image);

      if(image.size > 1040000) return alert('Maximum image size is 1MB');

      dispatch(updateAvatar(formData));
      setImage(null);
    }
  }, [image, dispatch]);

  const submitHandler = (values, { resetForm }) => {
    dispatch(
      updateUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
    modalHandler();
  };

  const handleFileSelect = evt => {
    setImage(evt.target.files[0]);
  };

  const checkAvatar = () => {
    if (avatar && avatar.length > 0) {
        return avatar;
    }
    return userAvatar;
  }

  return (
    <div className={css.modal}>
      <div className={css.imageContainer}>
        {userAvatar.length === 0 && !avatar ? (
          <svg className={css.svg}>
            <use href={sprite + '#user-avatar-icon'}></use>
          </svg>
        ) : (
          <div className={css.image}>
            <img className={css.img} src={checkAvatar()} alt="Avatar" />
          </div>
        )}
        <div className={css.addImg}>
          <label className={css.label} htmlFor="inputAddFile">
            <svg className={css.labelSvg}>
                <use href={sprite + "#icon-btn-plus"}></use>
            </svg>
          </label>
          <input
            className={css.addFile}
            id="inputAddFile"
            type="file"
            accept="image/png, image/jpeg"
            placeholder=""
            onChange={handleFileSelect}
          />
        </div>
      </div>

      <Formik
        initialValues={InitalVelues}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        <Form>
          <InputField name="name" placeholder="Enter name" />
          <InputField name="email" placeholder="Enter email" />
          <InputField name="password" placeholder="Enter password" />
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
