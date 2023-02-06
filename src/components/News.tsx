import { config } from './config';

export const News = (): JSX.Element => {
  return (
    <section id="news" className="flex-grow">
      <h1 className="text-3xl font-bold">{config.news.main}</h1>
      <div className="w-2/5 py-6">
        <a className="twitter-timeline" href="https://twitter.com/hid3xxx?ref_src=twsrc%5Etfw">
          Tweets by hid3xxx
        </a>
        <script async src="https://platform.twitter.com/widgets.js" />
      </div>
    </section>
  );
};
