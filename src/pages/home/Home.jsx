import { Helmet } from 'react-helmet';

import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <main className={css['home-main']}>
        <Section>
          <Container>
            <div className={css['greeting-wrap']}>
              <p className={css['greeting-text']}>
                Welcome!
                </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
