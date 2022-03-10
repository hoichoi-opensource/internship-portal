import Head from 'next/head'
import Image from 'next/image'
import JobCards from '../components/JobCards'
import StackCard from '../components/StackCard'
import WorkCards from '../components/WorkCards'
import styles from '../styles/Home.module.css'
import Linkedin from "../components/icons/Linkedin"
import Twitter from "../components/icons/Twitter"
import ReactPlayer from 'react-player/youtube'
import PositionCards from '../components/PositionCards'
import { useEffect, useState } from 'react'
import shuffleSeed from 'shuffle-seed'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const getStaticProps = async () => {
  const resp = await fetch("https://join.hoichoi.tech/api/tabs");
  // const resp = await fetch("http://localhost:3000/api/tabs");
  const tabData = await resp.json();
  const resp1 = await fetch("https://join.hoichoi.tech/api/stacks");
  // const resp1 = await fetch("http://localhost:3000/api/stacks");
  const stacksData = await resp1.json();

  return {
    props: {tabData, stacksData}
  }
}

export default function Home({tabData, stacksData}) {
  const [activeCard, setActiveCard] = useState(null);
  const [showTabs, setShowTabs] = useState(false);
  const [tabList, setTabList] = useState([]);
  const [activeTabs, setActiveTabs] = useState([]);

  useEffect(() => {
    AOS.init({duration: 1200});
  },[])
  
  useEffect(() => {
    const shuffle = shuffleSeed.shuffle(tabData.tabs, Math.random());
    setTabList(shuffle);
  },[activeCard])

  return (
    <div>
      <Head>
        <meta name="description" content="Join the team where tech meets entertainment" />
        <title>hoichoi.tech - Join the team where tech meets entertainment</title>
      </Head>
      <main className={styles.main} data-aos="fade-in">
        <div className={styles.logoContainer} />
        <div className={styles.header}>Join the <span className={styles.redHighlight}>team</span> <br />where tech meets entertainment</div>
      </main>
      <section className={styles.section1}>
        <div className={styles.header2} data-aos="fade-up" data-aos-delay="150">
            What we <span className={styles.redHighlight}>do?</span>
        </div>
        <div className={styles.paraContainer} data-aos="fade-up" data-aos-delay="250">
          <p className={styles.para}>At hoichoi.tech, we build experience through technology that you cherish for life! <br />Some of the most knowledgeable and passionate people in the technology industry work here. <br />We set out every day to innovate and disrupt the status quo.</p>
        </div>
        <div className={styles.cardsContainer} data-aos="fade-up" data-aos-delay="450">
          <div className={styles.cards}>
            <WorkCards icon="video" title="Video Technology" subtitle="We love video and so encoding &amp; optimization. We continously thrive to deliver optimised video to our viwers with differenct bitrates, formats and codecs." />
            <WorkCards icon="wand" title="Product Innovation" subtitle="We work on cutting edge mobile and cloud platforms to make a great OTT product. Making hoichoi available on all possible platform that we are working on." />
          </div>
          <WorkCards icon="ux" title="User Experience" subtitle="Understanding what a customer actually wants before committing to a solution ensures a product will be truly desirable. Great experiences reduce business risk." />
        </div>  
      </section>
      <section className={styles.section1}>
        <div className={styles.header2} data-aos="fade-up" data-aos-delay="150">
            What we <span className={styles.redHighlight}>work</span> with
        </div>
        <div className={styles.paraContainer} data-aos="fade-up" data-aos-delay="100">
          <p className={styles.para}>We work with multiple programming languages, infrastructure and different technologies to ensure all-round availability of the hoichoi video streaming across multiple platforms.</p>
        </div>
          <div className={styles.stacks} data-aos="fade-up" data-aos-delay="200">
            {stacksData.stack.map((stack, index) => {
              return <StackCard key={index} icon={stack.icon} name={stack.name} />
            })}
          </div>
          <a href="https://stackshare.io/hoichoi/tech" target="_blank" rel="noreferrer noopener"><div className={styles.exploreBtn} data-aos="fade-up">EXPLORE MORE</div></a>
      </section>
      <section className={styles.section1}>
        <div className={styles.header2} data-aos="fade-up" data-aos-delay="150">
            Life at <span className={styles.redHighlight}>hoichoi</span>
        </div>
         <div className={styles.videoContainer} data-aos="fade-in" data-aos-delay="200">
            <ReactPlayer url='https://youtu.be/gzcMSTneIuY' controls={true} width="100%" height="100%"  />
         </div>
      </section>
      <section className={styles.section1}>
        <div className={styles.header2} data-aos="fade-up" data-aos-delay="150">
            Build a <span className={styles.redHighlight}>career</span> with us
        </div>
        <div className={styles.paraContainer2} data-aos="fade-up" data-aos-delay="200">
          <p className={styles.para2}>Select an option which suits you the best</p>
        </div>
        <div className={styles.cardsContainer} data-aos="fade-up" data-aos-delay="450">
          <div className={styles.cards}>
            <JobCards title="Working Professionals" subtitle="Take your career to the next level" active={activeCard === 0} onClick={() => {setActiveCard(0); setShowTabs(true);}} />
            <JobCards title="Recent Graduates" subtitle="Make bold steps in a new direction" active={activeCard === 1} onClick={() => {setActiveCard(1); setShowTabs(true);}} />
          </div>
          <JobCards title="Internships" subtitle="Bring your passion  to make a difference" active={activeCard === 2} onClick={() => {setActiveCard(2); setShowTabs(true);}} />
        </div>
        {showTabs && <>
          <div className={styles.paraContainer2} data-aos="fade-in" data-aos-delay="150">
          <p className={styles.para3}>Pick at least one option from below</p>
          </div>
          <div className={styles.tabs} data-aos="fade-in" data-aos-delay="200">
           {tabList.map( (tab, index) => {
             return <PositionCards name={tab} key={index} active={activeTabs.includes(tab)} onClick={() => {
              activeTabs.includes(tab) 
              ? setActiveTabs(activeTabs.filter( item => item !== tab)) 
              : setActiveTabs(prev => prev.length === 0 ? [tab] : [...activeTabs, tab])
             }} />
           })}
         </div>
        </>}
        {activeTabs.length !== 0 && <Link href={activeCard === 0 ? {
          pathname: "/professional",
          query: {
            experience: "Working Professional",
            skills: [...activeTabs]
          }
          } : {
            pathname: "/internship",
            query: {
              experience: activeCard === 1 ? "Recent Graduates" : "Internship",
              skills: [...activeTabs]
            }
            }} as={activeCard === 0 ? "/professional" : "/internship"}><div className={styles.continueBtn} data-aos="fade-in" data-aos-delay="150">Continue</div></Link>}
      </section>
      <footer className={styles.footerContainer}>
          <div className={styles.footerContent}>
            Copyright ©{new Date().getFullYear()} hoichoi.tech
          </div>
          <div className={styles.footerContent1}>
            <div className={styles.text}>Build with </div>
            <div className={styles.heart}><Image src="/assets/icons8-love-48.png" alt="" width="24" height="24" /></div>
            <div className={styles.text}> from Kolkata</div>
          </div>
          <div className={styles.footerContent2}>
            <a href="https://www.linkedin.com/company/hoichoitech/" target="_blank" rel="noreferrer noopener"><Linkedin /></a>
            <a href="https://twitter.com/hoichoitech" target="_blank" rel="noreferrer noopener"><Twitter /></a>
          </div>
      </footer>
    </div>
  )
}
