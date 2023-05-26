import Head from 'next/head';

interface IHeadPages {
  title: string;
}

const HeadPages: React.FC<IHeadPages> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadPages;
