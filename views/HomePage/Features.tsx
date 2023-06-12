import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Comprehensive Course Catalog',
    description:
      'Flutterbeam provides a vast and diverse course catalog encompassing a wide range of subjects and skills. From traditional academic disciplines to cutting-edge industry-specific courses, our platform offers a comprehensive selection that caters to the diverse learning needs of our users. We collaborate with expert instructors and educational institutions to curate high-quality content, ensuring that learners have access to relevant and up-to-date knowledge.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Interactive and Engaging Learning Experience',
    description:
      'We believe that effective learning goes beyond static content delivery. Flutterbeam incorporates interactive and engaging elements into our e-learning platform to foster active participation and knowledge retention. Through features such as multimedia-rich lessons, quizzes, simulations, and gamification, we create an immersive learning environment that keeps learners motivated, promotes collaboration, and enhances their overall learning experience.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Personalized Learning Journeys',
    description:
      'Recognizing that each learner has unique goals and preferences, Flutterbeam places a strong emphasis on personalized learning journeys. Our platform utilizes advanced algorithms and user data to provide personalized recommendations, adaptive assessments, and customized learning paths. Learners can progress at their own pace, focusing on areas that require more attention while being guided towards their desired outcomes. We strive to make learning flexible, tailored, and optimized for individual success.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;