import { config } from './config';

export const News = (): JSX.Element => {
  return (
    <section id="news" className="flex-grow">
      <h1 className="text-3xl font-bold">{config.news.main}</h1>
      <div className="py-6 md:flex md:flex-col lg:flex lg:w-1/2 lg:space-x-4">
        <a
          className="twitter-timeline"
          href="https://twitter.com/hid3xxx?ref_src=twsrc%5Etfw"
        >
          Tweets by hid3xxx
        </a>
        <script async src="https://platform.twitter.com/widgets.js" />
      </div>
    </section>
  );
};
