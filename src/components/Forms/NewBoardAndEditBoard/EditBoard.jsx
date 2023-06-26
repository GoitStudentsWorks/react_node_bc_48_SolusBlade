import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import clsx from 'clsx';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import InputField from 'shared/components/InputField/InputField';
import Icon from '../../Icon/Icon';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import BgIcon from './BgIcon';
import s from './NewBoard.module.scss';

import defaultBg from '../../../static/images/bgIcons/defaultBg.png';
import flowers from '../../../static/images/bgIcons/flowers.png';
import leaves from '../../../static/images/bgIcons/leaves.png';
import mountainsAndBalloon from '../../../static/images/bgIcons/mountainsAndBalloon.png';
import nature from '../../../static/images/bgIcons/nature.png';
import oceanAndYacht from '../../../static/images/bgIcons/oceanAndYacht.png';
import orangePlanet from '../../../static/images/bgIcons/orangePlanet.png';
import planets from '../../../static/images/bgIcons/planets.png';
import rocksAndOcean from '../../../static/images/bgIcons/rocksAndOcean.png';
import sakura from '../../../static/images/bgIcons/sakura.png';
import sky from '../../../static/images/bgIcons/sky.png';
import skyBalloons from '../../../static/images/bgIcons/skyBalloons.png';
import starsAndShine from '../../../static/images/bgIcons/starsAndShine.png';
import trailerInTheCanyon from '../../../static/images/bgIcons/trailerInTheCanyon.png';
import yacht from '../../../static/images/bgIcons/yacht.png';
import youngMonth from '../../../static/images/bgIcons/youngMonth.png';

const initialsValue = {
  title: '',
};

const schema = yup.object().shape({
  title: yup.string().required('Title is a required field'),
});

const EditBoard = () => {
  const [icon, setIcon] = useState('colors');
  const [bg, setBg] = useState('defaultBg');

  const handleSubmit = (values, { resetForm }) => {
    const obj = {
      title: values.title,
      icon: icon,
      background: bg,
    };
    console.log(obj);

    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialsValue}
    >
      <Form>
        <InputField name="title" placeholder="Title" />
        <div>
          <p className={s.title}>Icons</p>
          <RadioGroup
            orientation="horizontal"
            aria-label="Icons"
            name="icons"
            variant="outlined"
            value={icon}
            onChange={event => setIcon(event.target.value)}
            sx={{
              marginBottom: '24px',
              border: 'none',
              gap: '8px',
            }}
          >
            {[
              'colors',
              'hexagon',
              'project',
              'container',
              'lightnight',
              'loading',
              'puzzle',
              'star',
            ].map(item => (
              <Box
                key={item}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Radio
                  value={item}
                  disableIcon
                  overlay
                  name="icons"
                  label={
                    {
                      colors: (
                        <Icon
                          name="colors"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'colors' && s.activeSvgIcon
                          )}
                        />
                      ),
                      hexagon: (
                        <Icon
                          name="hexagon"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'hexagon' && s.activeSvgIcon
                          )}
                        />
                      ),
                      project: (
                        <Icon
                          name="project"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'project' && s.activeSvgIcon
                          )}
                        />
                      ),
                      container: (
                        <Icon
                          name="container"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'container' && s.activeSvgIcon
                          )}
                        />
                      ),
                      lightnight: (
                        <Icon
                          name="lightnight"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'lightnight' && s.activeSvgIcon
                          )}
                        />
                      ),
                      loading: (
                        <Icon
                          name="loading"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'loading' && s.activeSvgIcon
                          )}
                        />
                      ),
                      puzzle: (
                        <Icon
                          name="puzzle"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'puzzle' && s.activeSvgIcon
                          )}
                        />
                      ),
                      star: (
                        <Icon
                          name="star"
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'star' && s.activeSvgIcon
                          )}
                        />
                      ),
                    }[item]
                  }
                  variant={icon === item ? 'solid' : 'plain'}
                  sx={{
                    '& .Joy-checked': {
                      backgroundColor: 'transparent',
                    },
                    '& .MuiRadio-label': {
                      width: '18px',
                      height: '18px',
                    },
                  }}
                  slotProps={{
                    input: { 'aria-label': item },
                    action: {
                      sx: {
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                        borderRadius: 0,
                        transition: 'none',
                      },
                    },
                    label: { sx: { lineHeight: 0 } },
                  }}
                />
              </Box>
            ))}
          </RadioGroup>
        </div>
        <div>
          <p className={s.title}>Background</p>
          <RadioGroup
            orientation="horizontal"
            aria-label="Backgrounds"
            name="background"
            variant="outlined"
            value={bg}
            onChange={event => setBg(event.target.value)}
            sx={{
              flexWrap: 'wrap',
              width: '260px',
              marginBottom: '24px',
              border: 'none',
              gap: '4px',
            }}
          >
            {[
              'defaultBg',
              'flowers',
              'leaves',
              'mountainsAndBallon',
              'nature',
              'oceanAndYacht',
              'orangePlanet',
              'planets',
              'rocksAndOcean',
              'sakura',
              'sky',
              'skyBalloons',
              'starsAndShine',
              'trailerInTheCanyon',
              'yacht',
              'youngMonth',
            ].map(item => (
              <Box
                key={item}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Radio
                  value={item}
                  disableIcon
                  overlay
                  name="background"
                  label={
                    {
                      defaultBg: <BgIcon name={defaultBg} alt={defaultBg} />,
                      flowers: <BgIcon name={flowers} alt={flowers} />,
                      leaves: <BgIcon name={leaves} alt={leaves} />,
                      mountainsAndBallon: (
                        <BgIcon
                          name={mountainsAndBalloon}
                          alt={mountainsAndBalloon}
                        />
                      ),
                      nature: <BgIcon name={nature} alt={nature} />,
                      oceanAndYacht: (
                        <BgIcon name={oceanAndYacht} alt={oceanAndYacht} />
                      ),
                      orangePlanet: (
                        <BgIcon name={orangePlanet} alt={orangePlanet} />
                      ),
                      planets: <BgIcon name={planets} alt={planets} />,

                      rocksAndOcean: (
                        <BgIcon name={rocksAndOcean} alt={rocksAndOcean} />
                      ),
                      sakura: <BgIcon name={sakura} alt={sakura} />,
                      sky: <BgIcon name={sky} alt={sky} />,
                      skyBalloons: (
                        <BgIcon name={skyBalloons} alt={skyBalloons} />
                      ),
                      starsAndShine: (
                        <BgIcon name={starsAndShine} alt={starsAndShine} />
                      ),
                      trailerInTheCanyon: (
                        <BgIcon
                          name={trailerInTheCanyon}
                          alt={trailerInTheCanyon}
                        />
                      ),
                      yacht: <BgIcon name={yacht} alt={yacht} />,
                      youngMonth: <BgIcon name={youngMonth} alt={youngMonth} />,
                    }[item]
                  }
                  variant={bg === item ? 'solid' : 'plain'}
                  sx={{
                    '& .Joy-checked': {
                      backgroundColor: 'transparent',
                      outline: '2px solid white',
                      borderRadius: '6px',
                      zIndex: '99',
                    },
                  }}
                  slotProps={{
                    input: { 'aria-label': item },
                    action: {
                      sx: {
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                        borderRadius: 0,
                        transition: 'none',
                      },
                    },
                    label: { sx: { lineHeight: 0 } },
                  }}
                />
              </Box>
            ))}
          </RadioGroup>
        </div>

        <ButtonModalWithIcon text="Edit" />
      </Form>
    </Formik>
  );
};

export default EditBoard;
