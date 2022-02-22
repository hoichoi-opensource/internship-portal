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

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Join the team where tech meets entertainment" />
        <title>hoichoi.tech - Join the team where tech meets entertainment</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.logoContainer}>
            <Image src="/assets/tech_logo.png" alt="" width="250" height="60"  />
          </div>
          <div className={styles.header}>
            Join the <span className={styles.redHighlight}>team</span> where tech meets entertainment
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/assets/main_img.png" alt="" width="1800%" height="1100%" />
        </div>
      </main>
      <section className={styles.section1}>
        <div className={styles.header2}>
            What we <span className={styles.redHighlight}>do?</span>
        </div>
        <div className={styles.paraContainer}>
          <p className={styles.para}>At hoichoi.tech, we build experience through technology that you cherish for life! <br />Some of the most knowledgeable and passionate people in the technology industry work here. <br />We set out every day to innovate and disrupt the status quo.</p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            <WorkCards icon="video" title="Video Technology" subtitle="We love video and so encoding &amp; optimization. We continously thrive to deliver optimised video to our viwers with differenct bitrates, formats and codecs." />
            <WorkCards icon="wand" title="Product Innovation" subtitle="We work on cutting edge mobile and cloud platforms to make a great OTT product. Making hoichoi available on all possible platform that we are working on." />
          </div>
          <WorkCards icon="ux" title="User Experience" subtitle="Understanding what a customer actually wants before committing to a solution ensures a product will be truly desirable. Great experiences reduce business risk." />
        </div>  
      </section>
      <section className={styles.section1}>
        <div className={styles.header2}>
            What we <span className={styles.redHighlight}>work</span> with
        </div>
        <div className={styles.paraContainer}>
          <p className={styles.para}>We work with multiple programming languages, infrastructure and different technologies to ensure all-round availability of the hoichoi video streaming across multiple platforms.</p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            <StackCard icon="kotlin" name="Kotlin" />
            <StackCard icon="swift" name="Swift"/>
            <StackCard icon="react" name="React"/>
            <StackCard icon="node" name="Node.js"/>
            <StackCard icon="firebase" name="Firebase"/>
          </div>
          <div className={styles.cards}>
            <StackCard icon="redis" name="Redis"/>
            <StackCard icon="amazon" name="Amazon S3"/>
            <StackCard icon="stripe" name="Stripe"/>
            <StackCard icon="git" name="Git"/>
            <StackCard icon="docker" name="Docker"/>
          </div>
          <div className={styles.exploreBtn}>EXPLORE MORE</div>
        </div>  
      </section>
      <section className={styles.section1}>
        <div className={styles.header2}>
            Life at <span className={styles.redHighlight}>hoichoi</span>
        </div>
         <div className={styles.videoContainer}>
            <ReactPlayer url='https://youtu.be/gzcMSTneIuY' controls={true} width="100%" height="100%"  />
         </div>
      </section>
      <section className={styles.section1}>
        <div className={styles.header2}>
            Build a <span className={styles.redHighlight}>career</span> with us
        </div>
        <div className={styles.paraContainer2}>
          <p className={styles.para2}>Select an option which suits you the best</p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            <JobCards title="Working Professionals" subtitle="Take your career to the next level" />
            <JobCards title="Recent Graduates" subtitle="Make bold steps in a new direction" />
          </div>
          <JobCards title="Internships" subtitle="Bring your passion  to make a difference" />
        </div>
        <div className={styles.paraContainer2}>
          <p className={styles.para3}>Pick at least one option from below</p>
        </div>
         <div className={styles.cards}>
           <PositionCards name="Frontend" />
           <PositionCards name="Backend" />
           <PositionCards name="Full Stack" />
           <PositionCards name="Android" active={true} />
           <PositionCards name="Ios" />
           <PositionCards name="Devops" />
           <PositionCards name="QA" />
         </div>
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
            <Linkedin />
            <Twitter />
          </div>
      </footer>
    </div>
  )
}
