import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div>
      <img src={icon} alt='icon' className='w-[5%] h-[50%] object-contain' />
      <p className={`text-semibold text-white`}>{title}</p>
      <p className={`${styles.paragraph}`}>{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section id='features' className={layout.section}>
    {/* Left side Business */}
    <div className={layout.section}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className='sm:block hidden' /> we'll handle the
        money
      </h2>
      <p className={`${styles.paragraph} text-white max-w-[400px] mt-5`}>
        With the right credit card, you can improve financial life by building
        credit, earning rewards and saving money
      </p>
      {/* Get Started Button */}
      <Button styles='mt-10' />
    </div>

    {/* Right side Business */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={feature.index} />
      ))}
    </div>
  </section>
);

export default Business;
