import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Equipment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid similique quam, optio inventore aperiam dolorum facere maiores eveniet laborum qui adipisci officiis corporis repellendus ducimus eligendi quibusdam voluptate harum illo.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid similique quam, optio inventore aperiam dolorum facere maiores eveniet laborum qui adipisci officiis corporis repellendus ducimus eligendi quibusdam voluptate harum illo.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid similique quam, optio inventore aperiam dolorum facere maiores eveniet laborum qui adipisci officiis corporis repellendus ducimus eligendi quibusdam voluptate harum illo.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            EvoGym offers a range of additional features to help you achieve
            your fitness goals and live your best life. Our nutrition coaches
            can create a customized meal plan to complement your workouts. We
            offer specialty classes like dance fitness and HIIT, and recovery
            services like massage therapy and foam rolling. Personal training is
            available for those who want one-on-one attention. We also offer
            corporate wellness programs, social events, and flexible scheduling
            to accommodate busy lifestyles. Join EvoGym today and experience all
            that we have to offer!
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves"></div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMEBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                molestiae harum nobis soluta, illum veniam excepturi qui dolorem
                recusandae, quaerat laudantium eius quibusdam obcaecati? Minima
                esse qui iusto consequuntur error.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque suscipit tempora unde expedita veritatis illo
                praesentium mollitia neque molestias culpa, adipisci tenetur
                necessitatibus vitae tempore rerum sequi, numquam corporis nisi.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
