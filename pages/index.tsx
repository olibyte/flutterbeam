import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Our Story" overTitle="The Past">
            <p>
            Founded in Melbourne in 2018, Flutterbeam embarked on a mission to transform the e-learning landscape by delivering innovative solutions to universities and the Victorian government. {' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Recognizing the evolving needs of educational institutions in the digital age, we set out to create a platform that would revolutionize the way knowledge is imparted and acquired. Starting with a small team of passionate educators and tech enthusiasts, we began collaborating closely with universities and government bodies, understanding their unique requirements and challenges.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="The digital era" overTitle="The Present" reversed>
            <p>Over the years, Flutterbeam has grown exponentially, expanding our team of talented professionals and continuously refining our platform. Our focus on harnessing the power of technology, combined with our deep understanding of the educational landscape, has allowed us to enhance access to quality education, empower learners, and equip institutions with the tools they need to thrive in the digital era.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}