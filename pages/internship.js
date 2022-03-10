import { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Professional.module.css"
import styles2 from "../styles/Internship.module.css"
import PositionCards from "../components/PositionCards";
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.awsAccessKeyId,
        secretAccessKey: process.env.awsSecretAccessKey
    }
})

export const getServerSideProps = async (context) => {
  const resp = await fetch("https://join.hoichoi.tech/api/tabs");
  // const resp = await fetch("http://localhost:3000/api/tabs");
  const availableTabs = await resp.json();

  return {
      props: { query: context.query, availableTabs}
  }
}

const internship = ({ query, availableTabs }) => {
  const { experience = "Internship", skills=[] } = query;
  const [optedExp, setOptedExp] = useState(experience);
  const [optedTabs, setOptedTabs] = useState(Array.isArray(skills) ? skills : [skills]);
  const [filteredTabs, setFilteredTabs] = useState(availableTabs.tabs.filter(item => !skills.includes(item) && item));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [location, setLocation] = useState("Kolkata");
  const [locationDropDownOpen, setLocationDropDownOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [qOne, setQOne] = useState("");
  const [qTwo, setQTwo] = useState("");
  const [qThree, setQThree] = useState("");
  const [qFour, setQFour] = useState("");
  const [submitResponse, setSubmitResponse] = useState('');

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [githubError, setGithubError] = useState("");
  const [fileError, setFileError] = useState("");
  const [qOneError, setQOneError] = useState("");
  const [qTwoError, setQTwoError] = useState("");
  const [qThreeError, setQThreeError] = useState("");
  const [qFourError, setQFourError] = useState("");

  const type1 = useRef();
  const type2 = useRef();
  const type3 = useRef();
  const type4 = useRef();
  const nameFieldInputRef = useRef();
  const nameInputRef = useRef();
  const emailFieldInputRef = useRef();
  const emailInputRef = useRef();
  const contactFieldInputRef = useRef();
  const contactInputRef = useRef();
  const linkedinFieldInputRef = useRef();
  const linkedinInputRef = useRef();
  const githubFieldInputRef = useRef();
  const githubInputRef = useRef();
  const locationRef = useRef();
  const dropDownRef = useRef();
  const skillsFieldInputRef = useRef();
  const attachFieldInputRef = useRef();
  const attachInputRef = useRef();
  const qOneFieldInputRef = useRef();
  const qTwoFieldInputRef = useRef();
  const qThreeFieldInputRef = useRef();
  const qFourFieldInputRef = useRef();
  const qOneInputRef = useRef();
  const qTwoInputRef = useRef();
  const qThreeInputRef = useRef();
  const qFourInputRef = useRef();
  const submitBtnRef = useRef();

  useEffect(() => {
    type1?.current?.style.animationPlayState = "running";
    setTimeout(() => {
      type1?.current?.style.width = "100%";
      type1?.current?.style.animation = "none";
      type1?.current?.style.border = "none";
      type2?.current?.style.animationPlayState = "running";
    },2300)
    setTimeout(() => {
      type2?.current?.style.width = "100%";
      type2?.current?.style.animation = "none";
      type2?.current?.style.border = "none";
      nameFieldInputRef?.current?.style.display = "block";
      nameInputRef?.current?.focus();
      nameInputRef?.current?.select();
    },5000)
  },[])

  useEffect(() => {
      const remainingSkills = availableTabs.tabs.filter(item => !optedTabs.includes(item) && item);
      setFilteredTabs(remainingSkills);
      if (skills.length === 0 ) {
        attachFieldInputRef.current?.style.display = "block";
      }
      window.innerWidth >= 600 && attachFieldInputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
  },[optedTabs])

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const filenameFrags = file.name.split('.');
    const fileExt = filenameFrags[filenameFrags.length - 1]

    const params = {
        Bucket: "join-hoichoi-file-upload",
        Key: Date.now() + "_" + Math.floor(Math.random() * 99999) + "." + fileExt,
        Body: file,
    }

    s3.upload(params, async (error, data) => {
      if(error) {
        console.log(error);
        return;
      }

      const urlFrags = data.Location.split("/");
      const awsFilename = urlFrags[urlFrags.length - 1];

      const payload = {
        name,
        email,
        contact,
        linkedin,
        github,
        location,
        experience: optedExp,
        skills: optedTabs.join(", "),
        awsFilename,
        question1: qOne,
        question2: qTwo,
        question3: qThree,
        question4: qFour
      }

      const formResp = await fetch("https://join.hoichoi.tech/api/submit", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      formResp.status === 200 ? setSubmitResponse('Success') : setSubmitResponse('Error');
      })}

  return (
    <div className={styles2.container}>
      <div className={styles.formContainer}>
      {submitResponse === 'Success' 
      ? <div className={styles.scrollDiv}>
          We have received your application.<br />Thank you for showing your interest.
      </div> 
      : <div className={styles.scrollDiv}>
        <div className={styles.typeContainer}>
          <div className={styles.typedOut} ref={type1}>Welcome to <span className={styles.req}>hoichoi</span>.tech</div>
          <div className={styles.typedOut} ref={type2}>Let's begin our Adventure!</div>
        </div>
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className={styles.inputContainer} ref={nameFieldInputRef}>
                <label className={styles.label}>What is your name?<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={name} onChange={(e) => e.key !== "Enter" && setName(e.target.value)} ref={nameInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (name === "") return setNameError("Cannot be blank");
                        setNameError("");
                        emailFieldInputRef.current.style.display = "block";
                        emailInputRef.current.focus();
                        emailInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{nameError}</div>
            </div>
            <div className={styles.inputContainer} ref={emailFieldInputRef}>
                <label className={styles.label}>Mention your email<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={email} onChange={(e) => e.key !== "Enter" && setEmail(e.target.value)} ref={emailInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (email === "") return setEmailError("Cannot be blank");
                        if(String(email)
                        .toLowerCase()
                        .match(
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        ) === null) {
                            return setEmailError("Invalid email!")
                        };
                        setEmailError("");
                        contactFieldInputRef.current.style.display = "block";
                        contactInputRef.current.focus();
                        contactInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{emailError}</div>
            </div>
            <div className={styles.inputContainer} ref={contactFieldInputRef}>
                <label className={styles.label}>Enter your contact number<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={contact} onChange={(e) => e.key !== "Enter" && setContact(e.target.value)} ref={contactInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (contact === "") return setContactError("Cannot be blank");
                        if  (!Number.isInteger(parseInt(contact))){
                          return setContactError("Invalid number!");
                        }
                        if (!contact.match(/[0-9]+$/)) return setContactError("Invalid number!")
                        setContactError("");
                        linkedinFieldInputRef.current.style.display = "block";
                        linkedinInputRef.current.focus();
                        linkedinInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{contactError}</div>
            </div>
            <div className={styles.inputContainer} ref={linkedinFieldInputRef}>
                <label className={styles.label}>Enter your linkedin profile url?</label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={linkedin} onChange={(e) => e.key !== "Enter" && setLinkedin(e.target.value)} ref={linkedinInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (linkedin !== "" && (!linkedin.includes("linkedin.com") || linkedin.includes(" ") && (!linkedin.startsWith("http://")  || !linkedin.startsWith("https://")))) return setLinkedinError("Invalid url!");
                        setLinkedinError("");
                        githubFieldInputRef.current.style.display = "block";
                        githubInputRef.current.focus();
                        githubInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{linkedinError}</div>
            </div>
            <div className={styles.inputContainer} ref={githubFieldInputRef}>
                <label className={styles.label}>Enter your github profile url?</label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={github} onChange={(e) => e.key !== "Enter" && setGithub(e.target.value)} ref={githubInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (github !== "" && (!github.includes("github.com") || github.includes(" ") && (!github.startsWith("http://")  || !github.startsWith("https://")))) return setGithubError("Invalid url!");
                        setGithubError("");
                        githubInputRef.current.blur();
                        locationRef.current.style.display = "block";
                        dropDownRef.current.style.display = "block";
                        skillsFieldInputRef.current.style.display = "block";
                        if (optedTabs.length !== 0) {
                          attachFieldInputRef.current.style.display = "block";
                        }
                        locationRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }
                    }} />
                </div>
                <div className={styles.error}>{githubError}</div>
            </div>
            <div className={styles.inputContainer} ref={locationRef}>
            <label className={styles.label}>Location<span className={styles.req}>*</span></label>
              <Dropdown isOpen={locationDropDownOpen} toggle={() => setLocationDropDownOpen(!locationDropDownOpen)}>
                <DropdownToggle caret>
                  {location}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => setLocation("Kolkata")}>Kolkata</DropdownItem>
                  <DropdownItem onClick={() => setLocation("Dhaka")}>Dhaka</DropdownItem>
                  <DropdownItem onClick={() => setLocation("Remote")}>Remote</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className={styles.inputContainer} ref={dropDownRef}>
            <label className={styles.label}>Experience<span className={styles.req}>*</span></label>
              <Dropdown isOpen={dropDownOpen} toggle={() => setDropDownOpen(!dropDownOpen)}>
                <DropdownToggle caret>
                  {optedExp}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><a href="/professional" style={{ textDecoration: "none", color: "#212529"}}>Working Professional</a></DropdownItem>
                  <DropdownItem onClick={() => setOptedExp("Recent Graduates")}>Recent Graduates</DropdownItem>
                  <DropdownItem onClick={() => setOptedExp("Internship")}>Internship</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className={styles.inputContainer} ref={skillsFieldInputRef}>
              <label className={styles.label}>Skills<span className={styles.req}>*</span></label>
              <div>
                <div className={styles.tabHolder}>
                  {optedTabs.length === 0 ? <div className={styles.error}>No skill selected, choose atleast one</div> : optedTabs.map((skill, index) => <PositionCards name={skill} active={true} key={index} cardStyle={{fontSize: "16px"}} onClick={() => setOptedTabs(optedTabs.filter( item => item !== skill))} />)}
                </div>
                <hr style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }} />
                <div className={styles.tabHolder}>
                  {filteredTabs.map((item, index) => <PositionCards name={item} key={index} cardStyle={{fontSize: "16px"}} onClick={() => setOptedTabs(prev => prev.length === 0 ? [item] : [...optedTabs, item])} />)}</div>
              </div>
            </div>
            {optedTabs.length !== 0 && <div className={styles.inputContainer} ref={attachFieldInputRef}>
                <label className={styles.label}>Attach CV/Resume<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                  <input type="file" accept=".pdf" className={styles.file} autoComplete="off" ref={attachInputRef} onChange={() => {
                    if(attachInputRef.current.files[0].type !== 'application/pdf') return setFileError("Only PDF document is allowed");
                    setFile(attachInputRef.current.files[0]);
                    setFileError("");
                    qOneFieldInputRef.current.style.display = "block";
                    qOneInputRef.current.focus();
                    qOneInputRef.current.select();
                  }}  />
                </div>
                <div className={styles.error}>{fileError}</div>
            </div>}
            <div className={styles2.spacer} />
            <div className={styles.inputContainer} ref={qOneFieldInputRef}>
                <label className={styles.label}>Why did you choose to interview with this company for this position?<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={qOne} onChange={(e) => e.key !== "Enter" && setQOne(e.target.value)} ref={qOneInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (qOne === "") return setQOneError("Cannot be blank");
                        setQOneError("");
                        qTwoFieldInputRef.current.style.display = "block";
                        qTwoInputRef.current.focus();
                        qTwoInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{qOneError}</div>
            </div>
            <div className={styles.inputContainer} ref={qTwoFieldInputRef}>
                <label className={styles.label}>How do you plan to make an impact during your internship?<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={qTwo} onChange={(e) => e.key !== "Enter" && setQTwo(e.target.value)} ref={qTwoInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (qTwo === "") return setQTwoError("Cannot be blank");
                        setQTwoError("");
                        qThreeFieldInputRef.current.style.display = "block";
                        qThreeInputRef.current.focus();
                        qThreeInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{qTwoError}</div>
            </div>
            <div className={styles.inputContainer} ref={qThreeFieldInputRef}>
                <label className={styles.label}>What do you expect to gain from this internship and what are your work expectations?<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={qThree} onChange={(e) => e.key !== "Enter" && setQThree(e.target.value)} ref={qThreeInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (qThree === "") return setQThreeError("Cannot be blank");
                        setQThreeError("");
                        qFourFieldInputRef.current.style.display = "block";
                        qFourInputRef.current.focus();
                        qFourInputRef.current.select();
                      }
                    }} />
                </div>
                <div className={styles.error}>{qThreeError}</div>
            </div>
            <div className={styles2.spacer} />
            <div className={styles.inputContainer} ref={qFourFieldInputRef}>
                <label className={styles.label}>What are your plans after completing this internship and graduating from school?<span className={styles.req}>*</span></label>
                <div className={styles.fieldInput}>
                    <input className={styles.input} autoComplete="off" value={qFour} onChange={(e) => e.key !== "Enter" && setQFour(e.target.value)} ref={qFourInputRef} onKeyPress={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        if (qFour === "") return setQFourError("Cannot be blank");
                        setQFourError("");
                        submitBtnRef.current.style.display = "flex";
                        submitBtnRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "center"
                        })
                      }
                    }} />
                </div>
                <div className={styles.error}>{qFourError}</div>
            </div>
            <div className={styles.btnContainer} ref={submitBtnRef}>
              <input type="submit" className={styles.continueBtn} value="Submit Application" />
            </div>
          </form>
      </div>}
      </div>
    </div>
  )
}

export default internship